import "../assets/styles/components/SearchBar.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearch, randomId }) {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const handleLuckyClick = () => {
    navigate(`/movies/${randomId}`);
  };

  return (
    <form className="searchBar" onSubmit={(event) => event.preventDefault()}>
      <input type="text" name="search" onChange={handleSearchChange} />
      <button type="button" onClick={handleLuckyClick}>
        I'm feeling lucky
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  randomId: PropTypes.number.isRequired,
};

export default SearchBar;
