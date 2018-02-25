import {NavLink} from 'react-router-dom';

export const Header = ()=> (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand">Company events</span>
    <ul className="nav">
      <li className="nav-item">
        <NavLink  exact activeStyle={{
    fontWeight: 'bold',
   }} className="nav-link" to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeStyle={{
    fontWeight: 'bold',
   }} className="nav-link" to='/fav'>Fav</NavLink>
      </li>
    </ul>
  </nav>
)

