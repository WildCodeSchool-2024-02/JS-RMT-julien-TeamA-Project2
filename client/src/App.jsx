import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import FilterBar from "./components/FilterBar";

import "./App.css";

function App() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <>
      <h1>WildersMoviesClub</h1>
      <FilterBar
        type="genres"
        title="Genres"
        selectedFilter={selectedGenre}
        setSelectedFilter={setSelectedGenre}
      />
      <section className="app-container">
        {movies
          .filter(
            (movie) => movie.genre_ids === selectedGenre || selectedGenre === ""
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </section>
    </>
  );
}

export default App;
