import resList from "./utils/mockData";
import SearchBar from "./SearchBar";
import RestaurantCards from "./RestaurantsCards";

const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      <div className="res-cards-container">
        {resList.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
