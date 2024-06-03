import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import "../assets/styles/components/Navigation.css";

function Navigation({ styleClass }) {
  return (
    <nav className={styleClass}>
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo website" />
        </Link>
      </div>
      <div className="fav-container">
        <Link to="/favorites" className="fav">
          <button type="button">Access favorites</button>
        </Link>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  styleClass: PropTypes.shape({
    styleClass: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navigation;
