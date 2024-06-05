import * as PropTypes from "prop-types";
import LineMovieItem from "./LineMovieItem";

function LineMovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <LineMovieItem
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
          id={movie.id}
        />
      ))}
      {movies.length === 0 && (
        <p className="noMovieMessage">There is no movie in your favorites.</p>
      )}
    </>
  );
}

LineMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineMovieList;
