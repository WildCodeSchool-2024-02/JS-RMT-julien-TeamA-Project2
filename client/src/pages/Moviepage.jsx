import { useLoaderData } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";
import GenderCarousel from "../components/GenderCarousel";
import Footer from "../components/Footer";
import "../assets/styles/pages/MoviePage.css";


function Moviepage() {
  const { movie, similarMovies } = useLoaderData();
  return (
    <>     
      <MoviePoster key={movie.id} poster={movie} /> 
      <div className="bandeau-title">
        <h1>{movie.title}</h1>
        <p>{movie.release_date.slice(0, 4)}</p>
      </div>
      <MovieDescription key={movie.id} movie={movie} />
      <GenderCarousel similarMovies={similarMovies}/>
      <Footer />
    </>
  );
}

export default Moviepage;
