import { useLoaderData, useLocation } from "react-router-dom";

import MovieCard from "./components/MovieCard";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const movies = useLoaderData();
  const location = useLocation();

  const getNavStyle = (pathname) => {
    switch (pathname) {
      case "/":
        return "home-nav";
      default:
        return "default-nav";
    }
  };
  return (
    <>
      <Navigation styleClass={getNavStyle(location.pathname)} />
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
