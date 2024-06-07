import * as PropTypes from "prop-types";
import "../assets/styles/components/LineMovieItem.css";
import LikeButton from "./LikeButton";

function LineMovieItem({ title, posterPath, voteAverage, voteCount, id }) {
  return (
    <div className="line-movie-item">
      <div className="line-movie-item-left">
        <img src={posterPath} alt={title} className="lineMovie-poster" />
      </div>
      <div className="line-movie-item-center">
        <h2>{title}</h2>
        <div className="line-movie-item-info">
          <div>
            <span>{voteAverage}/10</span>
          </div>
          <div className="vote-count">
            <span>{voteCount}</span>
            <p>Votes</p>
          </div>
        </div>
      </div>
      <div className="line-movie-item-right">
        <LikeButton movieId={id} />
      </div>
    </div>
  );
}

LineMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default LineMovieItem;
