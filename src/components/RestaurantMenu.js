import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_API } from "./utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const jsonData = await data.json();
    setResMenu(jsonData);
  };

  if (resMenu == null) return <Shimmer />;
  const { itemCards } =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
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
