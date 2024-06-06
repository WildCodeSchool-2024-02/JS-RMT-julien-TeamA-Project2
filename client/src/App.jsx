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
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [search, setSearch] = useState("");
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
  );

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
          <p className="no-movie-message">
            There is no movie matching your search, please try again.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default App;
