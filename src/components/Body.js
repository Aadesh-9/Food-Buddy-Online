import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
import RestaurantCards from "./RestaurantsCards";
import Shimmer from "../utils/shimmerUI/Shimmer";
import { MOCK_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const [count, setCount] = useState(0);

  const mockData = MOCK_DATA;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    const jsonData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(jsonData);

    setFilteredListOfRestaurants(jsonData);
  };

  const handleLoadMore = () => {
    if (count < mockData.length) {
      setListOfRestaurants((prevList) => [...prevList, ...mockData[count]]);
      setFilteredListOfRestaurants((prevList) => [
        ...prevList,
        ...mockData[count],
      ]);
      setCount((prevCount) => prevCount + 1);
    } else {
      setListOfRestaurants((prevList) => [...prevList, ...mockData[3]]);
      setFilteredListOfRestaurants((prevList) => [...prevList, ...mockData[3]]);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className="body">
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
            setFilteredListOfRestaurants(filteredList);
          }}
          className="search-button"
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info.avgRating > 4.3;
          });
          filteredList.sort((a, b) => {
            const ratingA = a.info?.avgRating || 0;
            const ratingB = b.info?.avgRating || 0;
            return ratingB - ratingA;
          });

          setFilteredListOfRestaurants(filteredList);
        }}
        className="top-rated-restaurants-button"
      >
        Top Rated Restaurants
      </button>
      <div className="res-cards-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="Link-tag"
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
      <button
        onClick={() => {
          handleLoadMore();
        }}
        className="more-res-button"
      >
        Load more Restaurants
      </button>
    </div>
  );
};

export default Body;
