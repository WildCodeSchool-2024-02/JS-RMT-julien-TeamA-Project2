import { useLoaderData } from "react-router-dom";
import LineMovieList from "../components/LineMovieList";
import "../assets/styles/pages/favorites.css";

function FavoritesPage() {
  const favoriteMovies = useLoaderData();

  return (
    <>
      <h1 className="myFavoritesTitle">My favorites</h1>
      <div className="lineMovieList">
        <LineMovieList movies={favoriteMovies} />
      </div>
    </>
  );
}

export default FavoritesPage;
