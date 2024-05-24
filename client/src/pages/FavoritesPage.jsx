import {useLoaderData} from "react-router-dom";
import LineMovieList from "../components/LineMovieList";


function FavoritesPage() {
  const favoriteMovies = useLoaderData();

  return (
    <>
      <h1>Favorites</h1>
      <LineMovieList movies={favoriteMovies}/>
    </>
  )
}

export default FavoritesPage;