import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      Missing a movie? Find a mistake?{" "}
      <Link to="/contact">contact us here</Link>
    </div>
  );
}
export default Footer;
