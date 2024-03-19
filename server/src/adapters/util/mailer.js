const nodeMailer = require('nodemailer');


exports.getMailOptions = (email, link) => {
    let body = `
    <h2>Hey ${email}</h2>
    <p>Here's the special magic link you requested:</p>
    <p>${link}</p>
    <p>Please note that for added security this link becomes invalid after 45 minutes</p>
    <p>Stay Jiggy</p>`;
  
    return {
      body,
      subject: "Urgent: Super Secret Magic Link",
      to: email,
      html: body,
      from: process.env.EMAIL_ADDRESS,
    };
  };