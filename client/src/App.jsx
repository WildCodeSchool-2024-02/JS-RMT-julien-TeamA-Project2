import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      search === "" ||
      movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
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
      <FilterBar
        type="languages"
        title="Languages"
        selectedFilter={selectedLanguage}
        setSelectedFilter={setSelectedLanguage}
      />
      <SearchBar
        setSearch={setSearch}
        randomId={movies[Math.floor(Math.random() * movies.length)].id}
      />
      <section className="app-container">
        {filteredMovies
          .filter(
            (movie) =>
              (movie.genre_ids === selectedGenre || selectedGenre === "") &&
              (movie.original_language === selectedLanguage ||
                selectedLanguage === "")
          )
          .map((movie) => (
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
