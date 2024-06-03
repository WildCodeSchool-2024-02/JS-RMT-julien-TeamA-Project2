import { useLoaderData, useLocation } from "react-router-dom";

import MovieCard from "./components/MovieCard";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const movies = useLoaderData();
  const location = useLocation();

  const styleClass = location.pathname === "/" ? "home" : "";

  return (
    <>
      <Navigation styleClass={styleClass} />
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
