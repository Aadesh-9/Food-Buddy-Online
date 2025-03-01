import { useSelector } from "react-redux";
import RestaurantMenuCard from "./RestaurantMenuCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center">
      <h1 className="m-4 p-2 font-bold text-2xl">Cart</h1>
      <div>
        {cartItems.map((item, index) => (
          <RestaurantMenuCard key={index} data={item.data} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
