import "../css/Header.css";

function Header() {
  return (
    <div className="header_container">
      <div className="logo">
        <h2>Zoo App</h2>
      </div>
      <div className="input_container">
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
