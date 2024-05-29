import { useLoaderData } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";
import "./MoviePage.css";

function Moviepage() {
  const movie = useLoaderData();

  return (
    <>
      <section
        className="moviepage-container"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}
      >
        <MoviePoster key={movie.id} poster={movie} />
        <div className="info">
          <p>{movie.title}</p>
          {movie.release_date}
        </div>
        <section className="bandeau">
          <p className="genre">{movie.genre_ids}</p>
          <div>
            <p>{movie.vote_average}/10</p>
            <p className="tiny-votecount">{movie.vote_count} votes</p>
          </div>
        </section>
      </section>
      <MovieDescription key={movie.id} movie={movie} />
    </>
  );
}

export default Moviepage;
