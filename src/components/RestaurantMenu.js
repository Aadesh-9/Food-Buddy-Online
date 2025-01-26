import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmerUI/Shimmer";
import useGetRestaurantMenu from "../utils/hooks/useGetRestaurantMenu";

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

  const { name } = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - &#8377;{"  "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
