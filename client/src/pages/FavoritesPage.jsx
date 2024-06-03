import { useLoaderData } from "react-router-dom";
import LineMovieList from "../components/LineMovieList";
import "../assets/styles/pages/favorites.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function FavoritesPage() {
  const favoriteMovies = useLoaderData();

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
