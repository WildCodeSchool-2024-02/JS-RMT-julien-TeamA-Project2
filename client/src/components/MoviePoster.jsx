import PropTypes from "prop-types";
import "../assets/styles/components/MoviePoster.css";
import LikeButton from "./LikeButton";

function MoviePoster({ poster }) {
  return (
    <section
      className="moviepage-container"
      style={{ backgroundImage: `url(${poster.backdrop_path})` }}
    >
      <section className="bandeau">
        <div className="bandeau-bg">
          <p>{poster.genre_ids}</p>
        </div>
        <div className="movieposter">
          <img src={poster.poster_path} alt="Orphan: First Kill" />
        </div>
        <div className="bandeau-bg bandeau-note">
          <p>{poster.vote_average}/10</p>
          <p className="tiny-votecount">{poster.vote_count} votes</p>
        </div>
        <div className="bandeau-bg">
          <LikeButton movieId={poster.id} />
        </div>
      </section>
    </section>
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    vote_count: PropTypes.string.isRequired,
  }).isRequired,
};
export default MoviePoster;
