import { memo, useState, useEffect } from 'react';
import NavBar from './NavBar';
import PageDimmer from './PageDimmer';
import logoImage from '../images/logo.svg';

const Header = memo(function Header(props) {
  const {
    loginStatus,
    logout,
    setLoginPopupOpen,
  } = props;

  const [mobileView, setMobileView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleAuthButtonClick() {
    if (loginStatus === 'loggedIn') {
      logout();
    } else {
      setLoginPopupOpen(true);
    }
    toggleMobileMenuOpen();
  }

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
    // console.log('mobileMenuOpen', mobileMenuOpen);
  }

  useEffect(() => {
    function setResponsiveness() {
      return window.innerWidth < 470
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();

    window.addEventListener("resize", setResponsiveness);
  }, []);

  return (
    <header className="header root__section">
      <img src={logoImage} alt="mesto logo" className="logo" />
      {mobileView &&
        <button className="button button__modal button__modal_burger-white button_hover-on-black" onClick={toggleMobileMenuOpen} />
      }
      {(!mobileView || mobileMenuOpen) &&
        <div className="header__menu" >
          {mobileView && <PageDimmer handleClick={toggleMobileMenuOpen} />}
          <NavBar
            toggleMobileMenuOpen={toggleMobileMenuOpen}
            handleAuthButtonClick={handleAuthButtonClick}
          />
        </div>
      }
      {/* {mobileMenuOpen &&
        <div className="header__menu-page-dimmer" onClick={toggleMobileMenuOpen} />
      } */}
    </header>
  )
});

export default Header;
