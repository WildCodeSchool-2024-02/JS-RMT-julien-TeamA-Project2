import PropTypes from "prop-types";
import "../assets/styles/components/MoviePoster.css";

function MoviePoster({ poster }) {
  return (
    <section className="moviepage-container" style={{ backgroundImage: `url(${poster.backdrop_path})` }}>
      <div className="bandeau-container">
        <div className="movieposter">
          <img src={poster.poster_path} alt="Orphan: First Kill" />
        </div>
        <section className="bandeau">
          <div className="bandeau-noinfo" />
          <div className="bandeau-info">
            <div className="bandeau-bg">
              <p>{poster.genre_ids}</p>
            </div>
          </div>
          <div className="bandeau-info">
            <div />
            <div className="bandeau-bg bandeau-note">
              <p>{poster.vote_average}/10</p>
              <p className="tiny-votecount">{poster.vote_count} votes</p>
            </div>
          </div>
        </section>
      </div>
    </section>
    
    
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    vote_count: PropTypes.string.isRequired,
  }).isRequired,
};
export default MoviePoster;
