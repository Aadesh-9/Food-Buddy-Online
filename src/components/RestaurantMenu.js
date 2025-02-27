import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmerUI/Shimmer";
import useGetRestaurantMenu from "../utils/hooks/useGetRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useGetRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resMenu == null) return <Shimmer />;

  const { name, city, costForTwoMessage, cuisines, areaName } =
    resMenu?.data?.cards[2].card?.card?.info;

  const categories =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <div className="font-bold mx-[20%] p-2 m-2 text-center">
        <h1 className="text-3xl p-2 m-2">{name}</h1>
        <p>{areaName + " , " + city}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwoMessage}</p>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={showIndex === category?.card?.card?.title}
          setShowIndex={() =>
            setShowIndex(
              showIndex === category?.card?.card?.title
                ? null
                : category?.card?.card?.title
            )
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
