import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem,
    button,
  } from "@nextui-org/react";
  
  import { Link } from "react-router-dom";
  import { useSelector } from 'react-redux';
  import {selectIsLoggedIn} from "../../features/auth/redux/authSelectors"
  import { logOut } from "../../features/auth/redux/authSlice";
  import { useLogoutMutation } from "../../features/auth/redux/authApiSlice";
  
  function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    const [logout] = useLogoutMutation();
  
    const handleLogout = async () => {
      try {
        await logout().unwrap();
        dispatch(logOut());
        localStorage.removeItem("user");
        // document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <Navbar shouldHideOnScroll >
          <NavbarBrand>
            <p className="font-bold">
              {""}
              <Link to="/" >ALLOMEDIA</Link>
            </p>
          </NavbarBrand>
  
          { isLoggedIn ? (
            <>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem as={Link}  to="">  
                        Dashboard
                </NavbarItem>
              </NavbarContent>
  
              <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                      key="profile"
                      className="h-14 gap-2"
                      textValue="Signed in as"
                    >
                      <p className="font-semibold">Signed in as </p>
                      <p className="font-semibold text-success-500 "></p>
                    </DropdownItem>
  
                    <DropdownItem key="settings" textValue="My Settings">
                      <Link color="foreground" 
                      to=""
                      >
                        Profile
                      </Link>
                    </DropdownItem>
  
                    <DropdownItem
                      key="reset Password"
                      color="success"
                      textValue="reset Password"
                    >
                      <Link olor="foreground" >
                        reset password
                      </Link>
                    </DropdownItem>
  
                    <DropdownItem key="logout" color="danger" textValue="Log Out">
                      <Link  onClick={handleLogout} >Logout</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
            </>
            
          ) : (
            <NavbarContent justify="end">
              <NavbarItem>
                <Link className="font-bold " to="/auth/login" >
                  Login
                </Link>
              </NavbarItem>
  
              <NavbarItem>
                <Button as={Link} to="/auth/register" className="font-bold text-white " color="success" >
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          )}
        </Navbar>
      </>
    );
  }
  
  export default Header;
  