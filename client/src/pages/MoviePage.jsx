import { useLoaderData } from "react-router-dom";
import Navigation from "../components/Navigation";
import MovieDescription from "../components/MovieDescription";
import MoviePoster from "../components/MoviePoster";
import GenderCarousel from "../components/GenderCarousel";
import Footer from "../components/Footer";
import "../assets/styles/pages/MoviePage.css";

function MoviePage() {
  const movie = useLoaderData();

  return (
    <>
      <Navigation styleClass="moviepage" />
      <MoviePoster poster={movie} />
      <div className="band-title">
        <h1>{movie.title}</h1>
        <p>{movie.release_date.slice(0, 4)}</p>
      </div>
      <MovieDescription movie={movie} />
      <GenderCarousel genre={movie.genre_ids} movieId={movie.id} />

      <Footer />
    </>
  );
}

export default MoviePage;
