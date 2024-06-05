import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import "./App.css";
import SortMoviesSelect from "./components/SortMoviesSelect";

function App() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("note_desc");
  const [note, setNote] = useState([0, 10]);

  // Mise en place d'un filtre Cumulatif
  const filteredMovies = movies.filter(
    (movie) =>
      // Filtre sur le genre séléctionnés ou garde tous
      (movie.genre_ids === selectedGenre || selectedGenre === "") &&
      // Filtre sur le titre a partir de la barre de recherche
      (search === "" ||
        movie.title.toLowerCase().includes(search.toLowerCase())) &&
      // Filtre sur les notes avec le slider min et max
      movie.vote_average >= note[0] &&
      movie.vote_average <= note[1] &&
      // Filtre sur la langue séléctionné ou garde tous
      (movie.original_language === selectedLanguage || selectedLanguage === "")
  ).sort((a, b) => {
    switch (sortBy) {
      case "note_desc":
        return b.vote_average - a.vote_average;
      case "note_asc":
        return a.vote_average - b.vote_average;
      case "date_desc":
        return new Date(b.release_date) - new Date(a.release_date);
      case "date_asc":
        return new Date(a.release_date) - new Date(b.release_date);
      default:
        return 0;
    }
  });
  return (
    <>
      <Navigation styleClass="home" />
      <h1>WildersMoviesClub</h1>
      <div className="filter-container">
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
        <Slider setSlide={setNote} min={0} max={10} />
        <SortMoviesSelect setSortBy={setSortBy} />
      </div>
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
