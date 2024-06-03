
import { useLoaderData, useLocation } from "react-router-dom";
import { useState } from "react";

import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const movies = useLoaderData();

  const location = useLocation();

  const styleClass = location.pathname === "/" ? "home" : "";

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      search === "" ||
      movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );


  return (
    <>
      <Navigation styleClass={styleClass} />
      <h1>WildersMoviesClub</h1>
      <SearchBar
        setSearch={setSearch}
        randomId={movies[Math.floor(Math.random() * movies.length)].id}
      />
      <section className="app-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {filteredMovies.length === 0 && (
          <p className="noMovieMessage">
            There is no movie matching your search, please try again.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default App;
