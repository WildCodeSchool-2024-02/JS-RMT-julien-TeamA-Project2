import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.css";

function Footer() {
  return (
    <footer>
      Missing a movie? Find a mistake?
      <Link to="/contact">Contact us here</Link>
    </footer>
  );
}
export default Footer;
