import "../assets/styles/components/SearchBar.css";

function SearchBar() {
  return (
    <form className="searchBar" onSubmit={(event) => event.preventDefault()}>
      <input type="text" name="search" />
      <button type="button">I'm feeling lucky</button>
    </form>
  );
}

export default SearchBar;
