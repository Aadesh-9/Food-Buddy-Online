import resList from "./utils/mockData";
import SearchBar from "./SearchBar";
import RestaurantCards from "./RestaurantsCards";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log(listOfRestaurants);

  return (
    <div className="body">
      <SearchBar />
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info.avgRating > 4.1;
          });
          setListOfRestaurants(filteredList);
          console.log(filteredList);
        }}
        className="top-rated-restaurants-button"
      >
        Top Rated Restaurants
      </button>
      <div className="res-cards-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
