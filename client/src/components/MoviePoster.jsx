import PropTypes from "prop-types";

function MoviePoster({ poster }) {
  return (
    <div className="movieposter">
      <img src={poster.poster_path} alt="Orphan: First Kill" />
    </div>
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
export default MoviePoster;
