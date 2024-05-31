import { useLoaderData } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";
import "../assets/styles/pages/MoviePage.css";

function Moviepage() {
  const movie = useLoaderData();

  return (
    <>
      <section
        className="moviepage-container"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}
      >
        <div className="bandeau-container">
          <MoviePoster key={movie.id} poster={movie} />
          <section className="bandeau">
            <div className="bandeau-noinfo" />
            <div className="bandeau-info">
              <div>
                <h1 className="bandeau-title">{movie.title}</h1>
                <p>{movie.release_date.slice(0, 4)}</p>
              </div>
              <div className="bandeau-bg">
                <p>{movie.genre_ids}</p>
              </div>
            </div>

            <div className="bandeau-info">
              <div />
              <div className="bandeau-bg bandeau-note">
                <p>{movie.vote_average}/10</p>
                <p className="tiny-votecount">{movie.vote_count} votes</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <MovieDescription key={movie.id} movie={movie} />
    </>
  );
}

export default Moviepage;
