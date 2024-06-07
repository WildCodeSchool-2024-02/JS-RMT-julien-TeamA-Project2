import "../assets/styles/components/SearchBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SearchBar({ setSearch, randomId }) {
  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <form className="searchBar" onSubmit={(event) => event.preventDefault()}>
      <input type="text" name="search" onChange={handleSearchChange} />
      <Link className="random-button yellow-button" to={`/movies/${randomId}`}>
        I'm feeling lucky
      </Link>
    </form>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  randomId: PropTypes.number.isRequired,
};

export default SearchBar;
