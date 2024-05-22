import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";

import "./App.css";

function App() {
  const movies = useLoaderData();

  return (
    <>
      <h1>titre</h1>
      <h2>sous titre</h2>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default App;
