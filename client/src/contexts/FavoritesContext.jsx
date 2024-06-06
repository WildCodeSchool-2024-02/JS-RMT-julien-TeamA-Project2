import { createContext, useState, useContext, useEffect } from "react";
import * as PropTypes from "prop-types";

const FavoritesContext = createContext({
  favoriteIds: [],
});

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorites = (id) => {
    const newFavoriteIds = [...favoriteIds, id];
    localStorage.setItem("favoriteIds", JSON.stringify(newFavoriteIds));
    setFavoriteIds(newFavoriteIds);
  };

  const removeFromFavorites = (id) => {
    const newFavoriteIds = favoriteIds.filter(
      (favoriteId) => favoriteId !== id
    );
    localStorage.setItem("favoriteIds", JSON.stringify(newFavoriteIds));
    setFavoriteIds(newFavoriteIds);
  };

  const handleToggleFavorite = (movieId) => {
    if (favoriteIds.includes(movieId)) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  useEffect(() => {
    const favorites = localStorage.getItem("favoriteIds");
    if (favorites) {
      setFavoriteIds(JSON.parse(favorites));
    }
  }, []);

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
