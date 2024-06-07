import { useLoaderData } from "react-router-dom";
import LineMovieList from "../components/LineMovieList";
import "../assets/styles/pages/favorites.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useFavoritesContext } from "../contexts/FavoritesContext";

function FavoritesPage() {
  const { favoriteIds } = useFavoritesContext();
  const favoriteMovies = useLoaderData().filter((movie) =>
    favoriteIds.includes(movie.id)
  );

  return (
    <>
      <Navigation styleClass="favorites" />
      <h1 className="myFavoritesTitle">My favorites</h1>
      <div className="lineMovieList">
        <LineMovieList movies={favoriteMovies} />
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
