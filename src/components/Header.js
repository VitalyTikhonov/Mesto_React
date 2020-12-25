import { memo } from 'react';
import NavBar from './NavBar';
import logoImage from '../images/logo.svg';

const Header = memo(function Header(props) {
  const {
    popupMap,
    handlePopupControlAction,
    loginStatus,
    logout,
  } = props;
  const {
    form: { login },
  } = popupMap;

  function handleAuthButtonClick() {
    if (loginStatus === 'loggedIn') {
      logout();
    } else {
      const eventImitation = { target: { id: login.name + 'OpenElem' } }
      handlePopupControlAction(eventImitation);
    }
  }

  return (
    <header className="header root__section">
      <img src={logoImage} alt="mesto logo" className="logo" />
      <div className="header__menu">
        <NavBar />
        <button
          type="button"
          className="button header__auth-button"
          // id={login.name + 'OpenElem'}
          onClick={handleAuthButtonClick}
        >
          {loginStatus === 'loggedIn' ? 'Выйти' : 'Войти'}
        </button>
      </div>
    </header>
  )
});

export default Header;
