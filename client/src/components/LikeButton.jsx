import * as PropTypes from "prop-types";
import { useFavoritesContext } from "../contexts/FavoritesContext";

function LikeButton({ movieId }) {
  const { favoriteIds, handleToggleFavorite } = useFavoritesContext();

  return (
    <button type="button" onClick={() => handleToggleFavorite(movieId)}>
      {favoriteIds.includes(movieId)
        ? "remove from favorites"
        : "add to Favorite"}
    </button>
  );
}

LikeButton.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default LikeButton;
