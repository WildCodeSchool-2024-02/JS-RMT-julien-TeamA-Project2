import { useLoaderData } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const movies = useLoaderData();
  return (
    <>
      <h1>WildersMoviesClub</h1>
      <section className="app-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
