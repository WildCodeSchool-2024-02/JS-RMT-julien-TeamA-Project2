import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
