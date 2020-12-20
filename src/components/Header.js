import logoImage from '../images/logo.svg';

function Header(props) {
  const {
    popupMap,
    handlePopupControlAction,
    authStatus: { loggedIn },
    logout,
  } = props;
  const {
    form: { login },
  } = popupMap;

  function handleAuthButtonClick() {
    if (loggedIn) {
      logout();
    } else {
      const eventImitation = { target: { id: login.name + 'OpenElem' } }
      handlePopupControlAction(eventImitation);
    }
  }

  return (
    <header className="header root__section">
      <img src={logoImage} alt="mesto logo" className="logo" />
      <button
        type="button"
        className="button header__auth-button"
        // id={login.name + 'OpenElem'}
        onClick={handleAuthButtonClick}
      >
        {loggedIn ? 'Выйти' : 'Войти'}
      </button>
    </header>
  )
}

export default Header;
