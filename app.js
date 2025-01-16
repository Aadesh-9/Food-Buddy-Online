import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import SearchBar from "./src/components/SearchBar";
import { useState } from "react";

const AppLayout = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setListOfRestaurants={setListOfRestaurants}
        searchText={searchText}
        setSearchText={setSearchText}
        filteredListOfRestaurants={filteredListOfRestaurants}
        setFilteredListOfRestaurants={setFilteredListOfRestaurants}
      />
      <Body
        listOfRestaurants={listOfRestaurants}
        setListOfRestaurants={setListOfRestaurants}
        count={count}
        setCount={setCount}
        filteredListOfRestaurants={filteredListOfRestaurants}
        setFilteredListOfRestaurants={setFilteredListOfRestaurants}
      />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
