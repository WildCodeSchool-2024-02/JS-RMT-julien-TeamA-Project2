import axios from "axios";
import "./FilterBar.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function FilterBar({ selectedFilter, setSelectedFilter, title, type }) {
  const [filters, setFilters] = useState([]);
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/${type}`)
      .then((res) => setFilters(res.data));
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
    </div>
  );
}

FilterBar.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterBar;
