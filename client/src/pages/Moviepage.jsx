import { useLoaderData } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";

function Moviepage() {
  const movie = useLoaderData();
  console.info(movie);
  return (
    <div>
      <h1>movie-page</h1>
      <MovieDescription key={movie.id} movie={movie} />
    </div>
  );
}

export default Moviepage;
