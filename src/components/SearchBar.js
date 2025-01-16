const SearchBar = (props) => {
  const { searchText, setSearchText, listOfRestaurants, setListOfRestaurants } =
    props;
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-space"
        placeholder="Search Food Buddy Online"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          console.log(filteredList);
          setListOfRestaurants(filteredList);
        }}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
