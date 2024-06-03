import { createContext, useState, useContext } from "react";
import * as PropTypes from "prop-types";

const FavoritesContext = createContext({
  favoriteIds: [],
});

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorites = (id) => {
    setFavoriteIds([...favoriteIds, id]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteIds(favoriteIds.filter((favoriteId) => favoriteId !== id));
  };

  const handleToggleFavorite = (movieId) => {
    if (favoriteIds.includes(movieId)) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, handleToggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
export const useFavoritesContext = () => useContext(FavoritesContext);
