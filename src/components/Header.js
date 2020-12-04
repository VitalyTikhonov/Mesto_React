import logoImage from '../images/logo.svg';

function Header() {
  return (
    <header className="header root__section">
      <img src={logoImage} alt="mesto logo" className="logo" />
    </header>
  )
}

export default Header;
