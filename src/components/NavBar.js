import { memo, useContext } from 'react';
import { LoginStatusContext } from '../contexts/LoginStatusContext';
import { NavLink } from 'react-router-dom';
import { SUBPATH } from '../configs/config';

const NavBar = memo(function NavBar(props) {
  const { handleAuthButtonClick } = props;

  const loginStatus = useContext(LoginStatusContext);

  return (
    <nav className="nav-bar">
      <NavLink
        exact to={`${SUBPATH}/`}
        className="nav-bar__link link"
        activeClassName="nav-bar__link_active"
        onClick={props.toggleMobileMenuOpen}
      >Главная</NavLink>
      {loginStatus === 'loggedIn' &&
        <NavLink
          to={`${SUBPATH}/user-profile`}
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
          onClick={props.toggleMobileMenuOpen}
        >
          Профиль
        </NavLink>}
      <button
        type="button"
        className="button button__square_black-outline-white header__auth-button"
        onClick={handleAuthButtonClick}
      >
        {loginStatus === 'loggedIn' ? 'Выйти' : 'Войти'}
      </button>
    </nav>
  )
});

export default NavBar;
