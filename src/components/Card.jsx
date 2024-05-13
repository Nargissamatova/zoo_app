import "../css/Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Card({ name, likes, addLikes, removeCard, removeLikes }) {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/300x300/?${name}`} />
      <p>{name}</p>
      <div className="actions">
        <div className="like-icon" onClick={addLikes}>
          <i className="fas fa-heart"></i>
        </div>
        <div className="likes-count">
          {likes >= 0 ? likes : <span style={{ color: "red" }}>{likes}</span>}
        </div>
        <div className="dislike-icon" onClick={removeLikes}>
          <i className="fas fa-heart-broken"></i>
        </div>
      </div>
      <div className="remove-icon" onClick={removeCard}>
        <i className="fas fa-times fa-lg"></i>
      </div>

      <button>
        <Link to={name}>See more</Link>
      </button>
    </div>
  );
}

export default Card;
