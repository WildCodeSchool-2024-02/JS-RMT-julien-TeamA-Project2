import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const movies = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      search === "" ||
      movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const hasMovies = filteredMovies.length > 0;

  return (
    <>
      <h1>WildersMoviesClub</h1>
      <SearchBar
        setSearch={setSearch}
        randomId={movies[Math.floor(Math.random() * movies.length)].id}
      />
      <section className="app-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <p className="noMovieMessage">
          {hasMovies
            ? ""
            : "There is no movie matching your search, please try again."}
        </p>
      </section>
      <Footer />
    </>
  );
}

export default App;
