import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RESTAURANT_API } from "../utils/constants";
import RestaurantCards, { withPromotedLabel } from "./RestaurantsCards";
import Shimmer from "../utils/shimmerUI/Shimmer";
import { MOCK_DATA } from "../utils/constants";
import Footer from "./Footer";
import UserContext from "../utils/context/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const [count, setCount] = useState(0);

  const mockData = MOCK_DATA;

  promotedRestaurants = withPromotedLabel(RestaurantCards);

  // const { loggedInUser, setUserName } = useContext(UserContext);

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
    <div className="mt-[2%] h-full">
      <div className="search-container">
        <input
          type="text"
          className="w-[340px] ml-[35%] p-[6px] my-4 border-1 border-black border-solid rounded-sm bg-gray-500  placeholder:text-black"
          placeholder="Search Food-Buddy-Online"
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
          className="p-[6px]  mx-[6px] cursor-pointer border-1 border-black border-solid rounded-sm bg-gray-500 "
        >
          Search
        </button>
        {/* <div>
          <label>UserName : </label>
          <input
            type="text"
            className="m-2 p-2 border-1 border-black border-solid"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
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
        className="p-[6px]  ml-4 my-4 cursor-pointer border-1 border-black border-solid rounded-sm bg-gray-500"
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap mt-1.5">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="Link-tag"
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {/* {restaurant.data.promoted ? (
              <promotedRestaurants resData={restaurant} />
            ) : (
              <RestaurantCards resData={restaurant} />
            )} */}
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
      <button
        onClick={() => {
          handleLoadMore();
        }}
        className="p-[6px] my-6  mx-2 cursor-pointer border-1 border-black border-solid rounded-sm bg-gray-500"
      >
        Load more Restaurants
      </button>
      <Footer />
    </div>
  );
};

export default Body;
