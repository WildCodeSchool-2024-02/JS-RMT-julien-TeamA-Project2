import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../assets/styles/components/MovieCard.css";
import LikeButton from "./LikeButton";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${movie.poster_path})` }}
    >
      <div className="shadow-wrapper">
        <div className="heart-button">
          <LikeButton movieId={movie.id} />
        </div>
        <div className="vote-info">{movie.vote_average}/10</div>
      </div>
    </div>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
