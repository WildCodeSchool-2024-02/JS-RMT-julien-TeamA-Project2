import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const movies = useLoaderData();
  const [search, setSearch] = useState("");
  return (
    <>
      <h1>WildersMoviesClub</h1>
      <SearchBar
        setSearch={setSearch}
        randomId={movies[Math.floor(Math.random() * movies.length)].id}
      />
      <section className="app-container">
        {movies
          .filter(
            (movie) =>
              search === "" ||
              movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
