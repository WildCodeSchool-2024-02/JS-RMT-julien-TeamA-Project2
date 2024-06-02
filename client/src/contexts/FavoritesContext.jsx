import { createContext, useState, useContext } from "react";
import * as PropTypes from "prop-types";

const FavoritesContext = createContext({
  favoriteIds: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorites = (id) => {
    setFavoriteIds([...favoriteIds, id]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteIds(favoriteIds.filter((favoriteId) => favoriteId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
FavoritesProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
export const useFavoritesContext = () => useContext(FavoritesContext);
