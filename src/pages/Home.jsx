import { Link } from "react-router-dom";
import "../css/homePage.css";

function Home() {
  return (
    <div className="home-container">
      <div className="quarter animals">
        <Link to="/animals" className="quarter-link">
          <h1>Animals</h1>
        </Link>
      </div>
      <div className="quarter birds">
        <Link to="/birds" className="quarter-link">
          <h1>Birds</h1>
        </Link>
      </div>
      <div className="quarter insects">
        <Link to="/insects" className="quarter-link">
          <h1>Insects</h1>
        </Link>
      </div>
      <div className="quarter fish">
        <Link to="/fishes" className="quarter-link">
          <h1>Fish</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
