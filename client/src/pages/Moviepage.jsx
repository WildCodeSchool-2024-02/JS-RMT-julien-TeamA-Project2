import { useLoaderData } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";

function Moviepage() {
  const movie = useLoaderData();
  console.info(movie);
  return (
    <div>
      <h1>movie-page</h1>
      <MoviePoster key={movie.id} poster={movie} />
      <MovieDescription key={movie.id} movie={movie} />
    </div>
  );
}

export default Moviepage;
