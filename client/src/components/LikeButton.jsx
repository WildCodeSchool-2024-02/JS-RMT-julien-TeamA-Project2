import { useState } from "react";
import * as PropTypes from "prop-types";
import { useFavoritesContext } from "../contexts/FavoritesContext";

function LikeButton({ movieId }) {
  const { favoriteIds, addToFavorites, removeFromFavorites } =
    useFavoritesContext();
  const [isFavorite, setIsFavorite] = useState(() =>
    favoriteIds.includes(movieId)
  );

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  return (
    <button type="button" onClick={handleToggleFavorite}>
      {isFavorite ? "Remove" : "Add"}
    </button>
  );
}

LikeButton.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default LikeButton;
