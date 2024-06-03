import axios from "axios";
import "./FilterBar.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function FilterBar({ selectedGenre, setSelectedGenre }) {
  const [filter, setFilter] = useState([]);
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/genres`)
      .then((res) => setFilter(res.data));
  }, []);

  return (
    <div className="filter-bar-container">
      <label className="filter-bar-label" htmlFor="genre-select">
        Filter by Genre:
      </label>
      <select
        className="filter-bar-select"
        id="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="">Genres</option>
        {filter.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

FilterBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  setSelectedGenre: PropTypes.func.isRequired,
};

export default FilterBar;
