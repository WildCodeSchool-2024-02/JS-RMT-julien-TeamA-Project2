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
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <section className="app-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default App;
