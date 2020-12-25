import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__link link" activeClassName="nav-bar__link_active" >Галерея</NavLink>
      <NavLink to="/user-profile" className="nav-bar__link link" activeClassName="nav-bar__link_active" >Профиль</NavLink>
    </nav>
  )
}

export default NavBar;
