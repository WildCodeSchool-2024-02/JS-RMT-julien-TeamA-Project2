import { useLoaderData } from "react-router-dom";
import Navigation from "../components/Navigation";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";
import Footer from "../components/Footer";
import "../assets/styles/pages/MoviePage.css";


function Moviepage() {
  const movie = useLoaderData();

  return (

    <>
      <Navigation styleClass="movipage" />
      <section
        className="moviepage-container"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}      
      <MoviePoster key={movie.id} poster={movie} /> 
      <div className="bandeau-title">
        <h1>{movie.title}</h1>
        <p>{movie.release_date.slice(0, 4)}</p>
      </div>

      <MovieDescription key={movie.id} movie={movie} />
      <Footer />
    </>
  );
}

export default Moviepage;
