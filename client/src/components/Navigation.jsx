import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/components/Navigation.css";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo website" />
      </Link>
      <Link to="/favorites">
        <button type="button">Access favorites</button>
      </Link>
    </nav>
  );
}

export default Navigation;
