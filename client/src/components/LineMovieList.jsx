import * as PropTypes from "prop-types";
import LineMovieItem from "./LineMovieItem";

function LineMovieList({movies}) {
  return (
    <>
      {movies.map((movie) => (
          <LineMovieItem
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        )
      )}
    </>
  )
}

LineMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  })).isRequired
}

export default LineMovieList