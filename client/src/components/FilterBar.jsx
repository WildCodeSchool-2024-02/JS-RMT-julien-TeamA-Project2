import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./FilterBar.css";

function FilterBar({
  selectedFilter,
  setSelectedFilter,
  title,
  type,
  title2,
  type2,
  selectedFilterLanguage,
  setSelectedFilterLanguage,
}) {
  const [filters, setFilters] = useState([]);
  const [languages, setLanguages] = useState([]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setSelectedFilterLanguage(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/${type}`)
      .then((res) => setFilters(res.data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/${type2}`)
      .then((res) => setLanguages(res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="filter-bar-container">
      <label className="filter-bar-label">
        Filter by {title}:
        <select
          className="filter-bar-select"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">All {title}</option>
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </label>

      <label className="filter-bar-label">
        Filter by {title2}:
        <select
          className="filter-bar-select"
          value={selectedFilterLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">All {title2}</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

FilterBar.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selectedFilterLanguage: PropTypes.string.isRequired,
  setSelectedFilterLanguage: PropTypes.func.isRequired,
  title2: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
};

export default FilterBar;
