import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useGetRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      RESTAURANT_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResMenu(jsonData);
  };
  return resMenu;
};

export default useGetRestaurantMenu;
