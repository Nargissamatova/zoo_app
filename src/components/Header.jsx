import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../images/zoo_logo.png";

function Header() {
  return (
    <div className="header_container">
      <div className="logo">
        <img className="zoo_logo" src={logo} alt="zoo logo" />
        <Link to="/">
          <h2>Zoo App</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/birds"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Birds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animals"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fishes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Fish
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Insects
            </NavLink>
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
