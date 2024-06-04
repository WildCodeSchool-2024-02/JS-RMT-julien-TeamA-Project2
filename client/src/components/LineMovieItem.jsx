import * as PropTypes from "prop-types";
import "../assets/styles/components/LineMovieItem.css";
import LikeButton from "./LikeButton";

function LineMovieItem({ title, posterPath, voteAverage, voteCount, id }) {
  return (
    <div className="lineMovieItem">
      <div className="lineMovieItemLeft">
        <img src={posterPath} alt={title} className="lineMoviePoster" />
      </div>
      <div className="lineMovieItemCenter">
        <h2>{title}</h2>
        <div className="lineMovieItemInfo">
          <div>
            <span>{voteAverage}/10</span>
          </div>
          <div className="voteCount">
            <span>{voteCount}</span>
            <p>Votes</p>
          </div>
        </div>
      </div>
      <div className="lineMovieItemRight">
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
