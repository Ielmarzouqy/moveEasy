const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../../../infrastructure/databases/mongodb/models/User');
const TokenManager = require('../../util/TokenManager');
require('dotenv').config();

class UserController {
  registerUser = async (req, res) => {
    const { lastName, firstName, email, password, role, isEmailVerified } =
      req.body;
    if (!lastName || !firstName || !email || !password || !role) {
      res.status(404).json({ message: 'add all the infos' });
    }
    const hashPwd = await bcrypt.hash(password, 10);

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400).json({ message: 'user already exist' });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPwd,
      role,
      isEmailVerified,
    });

    await newUser.save();

    const accessToken = TokenManager.generateToken({ email: newUser.email });
    console.log('token', accessToken);

    const link = `http://localhost:8080/api/user/verify?token=${accessToken}`;
    function verifyEmail(email, link) {
      let transport = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '2f0433f9c00cb7',
          pass: '0a366ec0f2d833',
        },
      });

      const mailOptions = {
        from: 'vindication@enron.com',
        to: email,
        subject: 'Invoices due',
        text: 'Dudes, we really need your money.',
        html: ` <h2>Hey ${email}</h2>
            <p>Here's the special magic link you requested:</p>

            <a href=${link}>Verify Account</a>

            <p>Please note that for added security this link becomes invalid after 45 minutes</p>
            <p>Stay Jiggy</p>`,
      };

      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    verifyEmail(req.body.email, link);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      },
    });
  };

  verifyEmail = async (req, res) => {
    try {
      let email = req.user.email;
      const user = await User.findOne({ email });

      if (!user) {
        console.log('User not found for email:', email);
        return res.status(404).send('User not found');
      } else {
        user.isEmailVerified = true;
        await user.save();

        console.log('Email verified for user:', user);
        res.send('Email verified');
      }
    } catch (err) {
      res.status(500).send('internal server error');
    }
  };

  loginUser = async (req, res) => {
    console.log('login');
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log('user find one  ', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (user && isMatch && user.isEmailVerified == true) {
        console.log('user');
        const accessToken = TokenManager.generateToken({ email: user.email });
        console.log(accessToken);
        console.log(user.role);

        res.cookie('accessToken', accessToken, {
          httpOnly: true,
          secure: true,
        });

        return res
          .status(200)
          .json({ message: 'You are logged in successfully.' });
      } else {
        return res
          .status(401)
          .json({ message: 'Invalid credentials or email not verified.' });
      }
    }
  };

  logoutUser = async (req, res) => {
    res.cookie('accessToken', '');
    return res.status(200).json({ message: 'logged out' });
  };

  deleteUser = async (req, res) => {
    const { _id } = req.params;
    const userToDelete = await User.findOneAndDelete({ _id: _id });

    return res.status(200).json({ message: 'Delete account', userToDelete });
  };

  // **************************************************************************

  //    forgetPassword = async (req, res) => {
  //     try {
  //       const { email } = req.body;

  //       const user = await User.findOne({ email });

  //       if (!user) {
  //         return res.status(404).json({ message: 'User not found' });
  //       }

  //       const token = generateToken({ email: user.email });

  //       await user.save();

  //       const resetLink = `http://localhost:3000/Login/forget-password/reset-password?token=${token}`;
  //       sendPasswordResetEmail(email, resetLink);

  //       res.status(200).json({ message: 'Password reset link sent successfully' });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ message: 'Internal server error' });
  //     }

  //     function sendPasswordResetEmail(email, resetLink) {
  //       const transport = nodemailer.createTransport({
  //         host: 'sandbox.smtp.mailtrap.io',
  //         port: 2525,
  //         auth: {
  //           user: '2f0433f9c00cb7',
  //           pass: '0a366ec0f2d833',
  //         },
  //       });

  //       const mailOptions = {
  //         from: 'your_email@example.com',
  //         to: email,
  //         subject: 'Password Reset Link',
  //         text: 'Here is your password reset link:',
  //         html: `<a href="${resetLink}">Reset Password</a>`,
  //       };

  //       transport.sendMail(mailOptions, (error, info) => {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           console.log('Password reset email sent: ' + info.response);
  //         }
  //       });
  //     }
  //   };

  //    resetPassword = async (req, res) => {
  //     const token = req.query.token;
  //     console.log(token);
  //     const { newPassword } = req.body;
  //     console.log(newPassword);
  //     try {
  //       const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  //       const email = decoded.email;
  //       console.log(email);
  //       const user = await User.findOne({ email });

  //       if (email !== user.email) {
  //         return res.status(400).json({ message: 'Invalid or expired email' });
  //       }

  //       const hachPassword = await bcrypt.hash(newPassword, 10);
  //       console.log(hachPassword);
  //       await User.findOneAndUpdate({ email }, { password: hachPassword });

  //       return res.json({
  //         success: true,
  //         message: 'Mot de passe réinitialisé avec succès.',
  //       });
  //     } catch (error) {
  //       res.status(500).json({ success: false, error: error.message });
  //     }
  //   };

  getUserInfo = async (req, res) => {
    console.log('infooo');

    let user = await User.findOne({ email: req.user.email }).populate({
      path: 'role',
      select: 'name',
    });
    console.log(user);
    return res.status(200).json(user);
  };

  dashboard = async (req, res) => {
    const token = req.cookies.accessToken;

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const email = decoded.email;
      console.log(email);
      let user = await User.findOneAndUpdate({ email }).populate('role');
      console.log(user.role.name);

      if (user.role.name === 'admin') {
        res.json({
          message: 'Dashboard for admin',
          token: token,
          role: user.role.name,
        });
      } else {
        res.json({
          message: 'Dashboard access',
          token: token,
          role: user.role.name,
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  getRoleOfUser = async (req, res) => {
    const { email } = req.body;
    try {
      let user = await User.findOne({ email }).populate({
        path: 'role',
        select: 'name',
      });
      console.log(user);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
}

module.exports = UserController;
