import {useLoaderData} from "react-router-dom";
import LineMovieList from "../components/LineMovieList";
import styles from "../assets/styles/pages/favorites.module.css"


function FavoritesPage() {
  const favoriteMovies = useLoaderData();

  return (
    <>
      <h1 className={styles.myFavoritesTitle}>My favorites</h1>
      <div className={styles.lineMovieList}>
        <LineMovieList movies={favoriteMovies}/>
      </div>
    </>
  )
}

export default FavoritesPage;
