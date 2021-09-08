import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Flags from 'country-flag-icons/react/3x2';
import NavigationMenu from './navigationMenu';
import RegistrationPopup from './popups/registrationPopup';
import LoginPopup from './popups/loginPopup';
import ForgotPasswordPopup from './popups/forgotPasswordPopup';
import ResetPasswordPopup from './popups/resetPasswordPopup';
import VerifyEmailPopup from './popups/verifyEmailPopup';

const Header = ({ ...props }) => {
  const router = useRouter();
  const { asPath } = router;
  const { page, token } = router.query;
  const { title, description, userData, userToken, isUserLoggedIn, setUserIsLoggedOut } = props;
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [linkArray, setLinkArray] = useState({
    "hotels-and-resorts": false,
    "villas": false,
    "yacht-and-cruises": false,
    "gift-card": false,
    "travel-blog": false,
    "travel-experience": false,
    "faq": false,
    "about-us": false,
    "contact-us": false,
    "b2b-login": false
  });

  useEffect(() => {
    if (page === "resetPassword" && token !== "" && token !== undefined) {
      handleResetPasswordOpen();
    } else if (page === "verifyEmail" && token !== "" && token !== undefined) {
      handleVerifyEmailOpen();
    }
  }, [page])

  useEffect(() => {
    let path = asPath;
    let finalPath = path.replace("/", "");
    console.log("linkArray", linkArray);
    console.log("linkArray[asPath]", linkArray[finalPath]);
    if (linkArray[finalPath] !== undefined) {
      linkArray[finalPath] = true;
      console.log("updated linkArray", linkArray);
      setLinkArray(linkArray);
    }
  }, [asPath, linkArray])

  useEffect(() => {
    if (userToken !== "" && userData !== {}) {
      localStorage.setItem("token", userToken);
    }
  }, [userToken])

  const handleRegisterOpen = () => {
    if (showLogin) setShowLogin(false);
    setShowRegister(true);
  }
  const handleLoginOpen = () => {
    if (showRegister) setShowRegister(false);
    setShowLogin(true);
  }
  const handleForgotPasswordOpen = () => {
    setShowLogin(false);
    setShowForgotPassword(true);
  }
  const handleResetPasswordOpen = () => {
    setShowForgotPassword(false);
    setShowResetPassword(true);
  }
  const handleVerifyEmailOpen = () => {
    setShowVerifyEmail(true);
  }

  const handleRegisterClose = () => setShowRegister(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleForgotPasswordClose = () => setShowForgotPassword(false);
  const handleResetPasswordClose = () => {
    setShowResetPassword(false);
    router.push("/");
  }
  const handleVerifyEmailClose = () => {
    setShowVerifyEmail(false);
    router.push("/");
  }
  const handleMyAccountDropdown = (link) => {
    if (link === "logout") {
      setUserIsLoggedOut()
    }
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <header className="header">
        <div className="top_header">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xs-12 logo_block">
                <Link href="/">
                  <a>
                    <img className="web_logo" src="images/logo.svg" alt="logo" />
                    <img className="mob_logo" src="images/m_logo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="col-md-9 col-lg-9 col-xs-12 right_block">
                <div className="phone_block">
                  <a href="tel:079 423 3323"><img src="images/phoneicon1.svg" alt="phoneicon" /></a>
                  <span>Phone:</span> <a href="tel:079 423 3323" className="mobile-none">079 423 3323</a>
                </div>
                <div className="search_block">
                  <img src="images/search-ic.svg" alt="" width="20" height="20" className="mobile-ic" />
                  <form>
                    <input type="text" placeholder="Search" />
                    <img src="images/search-ic.svg" alt="" width="15" height="15" />
                  </form>
                </div>
                {isUserLoggedIn ? (
                  <div>
                    <Dropdown className="dropdown header-dropdown">
                      <Dropdown.Toggle variant="none">
                        <img src="images/suitcase-ic.svg" alt="" width="17" height="15" className="mr-2" />
                        My Trips
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link href="/my-trips">
                            <a className="no-hower-color">My Trips</a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href="/my-destination">
                            <a className="no-hower-color">My Destination</a>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropdown header-dropdown pl-0">
                      <Dropdown.Toggle variant="none">
                        <img src="images/user-ic.svg" alt="" width="17" height="15" className="mr-2" />
                        My Account
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link href="/my-account">
                            <a className="no-hower-color">My Account</a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleMyAccountDropdown("logout")}>
                          <Link href="/">
                            <a className="no-hower-color">Logout</a>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="country_block">
                      <Dropdown className="dropdown header-dropdown select-language">
                        <Dropdown.Toggle variant="none">
                          <p className="flag-icon-title"><Flags.IN title="India" /></p>
                          <p className="flag-icon-text">INR</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <p className="flag-icon-title"><Flags.IN title="India" /><span className="flag-icon-text">INR</span></p>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <p className="flag-icon-title"><Flags.US title="United States" /><span className="flag-icon-text">USA</span></p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="country_block">
                      <Dropdown className="dropdown header-dropdown select-language">
                        <Dropdown.Toggle variant="none">
                          <p className="flag-icon-title"><Flags.IN title="India" /></p>
                          <p className="flag-icon-text">INR</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <p className="flag-icon-title"><Flags.IN title="India" /><span className="flag-icon-text">INR</span></p>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <p className="flag-icon-title"><Flags.US title="United States" /><span className="flag-icon-text">USA</span></p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="registerlogin_block">
                      <button className="button2" data-toggle="modal" data-target="#registerModal" onClick={() => handleRegisterOpen()}><img src="images/signup-ic.png" alt="" className="mobile-ic" /> Register</button>
                      <button className="button1" data-toggle="modal" data-target="#loginModal" onClick={() => handleLoginOpen()}><img src="images/user-ic.svg" alt="" className="mobile-ic" />Login</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <NavigationMenu linkArrayDetails={linkArray} />
      </header>
      <RegistrationPopup show={showRegister} handleClose={() => handleRegisterClose()} handleLoginOpen={() => handleLoginOpen()} {...props} />
      <LoginPopup show={showLogin} handleClose={() => handleLoginClose()} handleForgotPasswordOpen={() => handleForgotPasswordOpen()} handleRegisterOpen={() => handleRegisterOpen()}  {...props} />
      <ForgotPasswordPopup show={showForgotPassword} handleClose={() => handleForgotPasswordClose()} handleResetPasswordOpen={() => handleResetPasswordOpen()} {...props} />
      <ResetPasswordPopup show={showResetPassword} handleClose={() => handleResetPasswordClose()} handleLoginOpen={() => handleLoginOpen()} token={token} {...props} />
      <VerifyEmailPopup show={showVerifyEmail} handleClose={() => handleVerifyEmailClose()} handleLoginOpen={() => handleLoginOpen()} token={token} {...props} />
    </div>
  )
}

export default Header;