import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmerUI/Shimmer";
import useGetRestaurantMenu from "../utils/hooks/useGetRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useGetRestaurantMenu(resId);

  if (resMenu == null) return <Shimmer />;
  let { itemCards } =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  if (itemCards === undefined)
    ({ itemCards } =
      resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

  if (itemCards === undefined)
    ({ itemCards } =
      resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]);

  const { name } = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="mx-[15%] my-12">
      <h1 className="p-6 text-center font-bold text-2xl ">{name}</h1>

      <div>
        {itemCards.map((item) => (
          <li className="list-none" key={item?.card?.info?.id}>
            <RestaurantMenuCard menuData={item} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
