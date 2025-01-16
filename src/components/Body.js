import { RESTAURANT_API } from "./utils/constants";
import RestaurantCards from "./RestaurantsCards";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import resList1 from "./utils/mockData/mockData1";
import resList2 from "./utils/mockData/mockData2";
import resList3 from "./utils/mockData/mockData3";
import resList4 from "./utils/mockData/mockData4";
import resList5 from "./utils/mockData/mockData5";
import resList6 from "./utils/mockData/mockData6";
import resList7 from "./utils/mockData/mockData7";
import resList8 from "./utils/mockData/mockData8";

const Body = (props) => {
  const { listOfRestaurants, setListOfRestaurants, count, setCount } = props;

  const mockData = [
    resList1,
    resList2,
    resList3,
    resList4,
    resList5,
    resList6,
    resList7,
    resList8,
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleLoadMore = () => {
    if (count < mockData.length) {
      setListOfRestaurants((prevList) => [...prevList, ...mockData[count]]);
      setCount((prevCount) => prevCount + 1);
    } else {
      setListOfRestaurants((prevList) => [...prevList, ...mockData[3]]);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
