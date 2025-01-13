const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-space"
        placeholder="Search Food Buddy Online"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
