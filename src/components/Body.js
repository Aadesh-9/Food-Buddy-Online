import resList1 from "./utils/mockData/mockData1";
import resList2 from "./utils/mockData/mockData2";
import resList3 from "./utils/mockData/mockData3";
import resList4 from "./utils/mockData/mockData4";
import resList5 from "./utils/mockData/mockData5";
import resList6 from "./utils/mockData/mockData6";
import resList7 from "./utils/mockData/mockData7";
import resList8 from "./utils/mockData/mockData8";
import SearchBar from "./SearchBar";
import { RESTAURANT_API } from "./utils/constants";
import RestaurantCards from "./RestaurantsCards";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <SearchBar />
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info.avgRating > 4.1;
          });
          setListOfRestaurants(filteredList);
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
      <button
        onClick={() => {
          if (count == 0) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList1]);
          } else if (count == 1) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList2]);
          } else if (count == 2) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList3]);
          } else if (count == 3) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList4]);
          } else if (count == 4) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList5]);
          } else if (count == 5) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList6]);
          } else if (count == 6) {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList7]);
          } else {
            setCount((prevCount) => prevCount + 1);
            setListOfRestaurants((prevList) => [...prevList, ...resList8]);
          }
        }}
        className="more-res-button"
      >
        Load more Restaurants
      </button>
    </div>
  );
};

export default Body;
