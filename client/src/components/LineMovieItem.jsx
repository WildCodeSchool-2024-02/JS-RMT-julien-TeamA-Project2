import * as PropTypes from "prop-types";

function LineMovieItem({ title, posterPath, voteAverage, voteCount }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={posterPath} alt={title}/>
      <p>{voteAverage} {voteCount}</p>
    </div>
  )
}


LineMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
}

export default LineMovieItem