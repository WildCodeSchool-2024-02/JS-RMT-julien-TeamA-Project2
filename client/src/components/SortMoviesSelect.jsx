import PropTypes from "prop-types";
import "../assets/styles/components/SortMoviesSelect.css";

function SortMoviesSelect({ setSortBy }) {
  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sort-movies-container">
      <label className="sort-movies-label">
        Sort by:
        <select className="sort-movies-select" onChange={handleSort}>
          <option value="note_desc">Best Note</option>
          <option value="note_asc">Worst Note</option>
          <option value="date_desc">Newest release</option>
          <option value="date_asc">Oldest release</option>
        </select>
      </label>
    </div>
  );
}

SortMoviesSelect.propTypes = {
  setSortBy: PropTypes.func.isRequired,
};

export default SortMoviesSelect;
