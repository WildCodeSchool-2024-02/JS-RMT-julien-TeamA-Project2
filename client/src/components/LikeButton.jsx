import * as PropTypes from "prop-types";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import heartLogo from "../assets/images/empty-heart.svg";
import heartIcon from "../assets/images/red-heart.svg";
import "../assets/styles/components/LikeButton.css";

function LikeButton({ movieId }) {
  const { favoriteIds, handleToggleFavorite } = useFavoritesContext();

  return (
    <button
      type="button"
      className="like-button"
      onClick={() => handleToggleFavorite(movieId)}
    >
      {favoriteIds.includes(movieId) ? (
        <img className="red-heart" src={heartIcon} alt="Red heart icon" />
      ) : (
        <img className="empty-heart" src={heartLogo} alt="Empty heart icon" />
      )}
    </button>
  );
}

LikeButton.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default LikeButton;
