import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      Missing a movie? Find a mistake?
      <Link to="/contact">contact us here</Link>
    </footer>
  );
}
export default Footer;
