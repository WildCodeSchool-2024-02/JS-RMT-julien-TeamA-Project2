import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navigation() {
  return (
    <nav>
      <img src={logo} alt="Logo website" />
      <Link to="/favorites">
        <button type="button">Access favorites</button>
      </Link>
    </nav>
  );
}

export default Navigation;
