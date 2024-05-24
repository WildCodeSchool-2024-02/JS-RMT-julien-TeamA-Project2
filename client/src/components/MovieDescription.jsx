import PropTypes from "prop-types";

function MovieDescription({ movie }) {
  return (
    <div className="moviedescription">
      <p>{movie.overview}</p>
    </div>
  );
}

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieDescription;
