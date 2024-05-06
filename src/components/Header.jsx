import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="header_container">
      <div className="logo">
        <Link to="/">
          <h2>Zoo App</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/fishes">Fish</NavLink>
          </li>
        </ul>
      </nav>
      <div className="input_container">
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
