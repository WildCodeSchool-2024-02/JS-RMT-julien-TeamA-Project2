import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState("");
  const [note, setNote] = useState([0, 10]);

  const filteredMovies = movies.filter(
    (movie) =>
      (movie.genre_ids === selectedGenre || selectedGenre === "") &&
      (search === "" ||
        movie.title.toLowerCase().includes(search.toLowerCase())) &&
      movie.vote_average >= note[0] &&
      movie.vote_average <= note[1]
  );

  return (
    <>
      <Navigation styleClass="home" />
      <h1>WildersMoviesClub</h1>
      <FilterBar
        type="genres"
        title="Genres"
        selectedFilter={selectedGenre}
        setSelectedFilter={setSelectedGenre}
      />
      <Slider setSlide={setNote} min={0} max={10} />
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
