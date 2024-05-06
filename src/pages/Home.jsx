import { Link } from "react-router-dom";
import "../css/homePage.css";

function Home() {
  return (
    <div className="home-container">
      <div className="half animals">
        <Link to="/animals" className="half-link">
          <h1>Animals</h1>
        </Link>
      </div>
      <div className="half birds">
        <Link to="/birds" className="half-link">
          <h1>Birds</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
