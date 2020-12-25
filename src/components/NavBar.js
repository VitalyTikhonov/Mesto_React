import { useContext } from 'react';
import { LoginStatusContext } from '../contexts/LoginStatusContext';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const loginStatus = useContext(LoginStatusContext);
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__link link" activeClassName="nav-bar__link_active" >Главная</NavLink>
      {loginStatus === 'loggedIn' &&
        <NavLink
          to="/user-profile"
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
        >
          Профиль
        </NavLink>}
    </nav>
  )
}

export default NavBar;
