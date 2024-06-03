import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const movies = useLoaderData();

  return (
    <>
      <Navigation styleClass="home" />
      <h1>WildersMoviesClub</h1>
      <section className="app-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default App;
