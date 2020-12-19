import logoImage from '../images/logo.svg';

function Header(props) {
  const { popupMap, handlePopupControlAction } = props;
  const {
    form: { login },
  } = popupMap;

  return (
    <header className="header root__section">
      <img src={logoImage} alt="mesto logo" className="logo" />
      <button
        type="button"
        className="button header__auth-button"
        id={login.name + 'OpenElem'}
        onClick={handlePopupControlAction}
      >
        Войти
      </button>
    </header>
  )
}

export default Header;
