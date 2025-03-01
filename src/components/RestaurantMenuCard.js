import { useDispatch } from "react-redux";
import { MENU_ITEM_URL } from "../utils/constants";
import { VEG_LOGO } from "../utils/constants";
import { NON_VEG_LOGO } from "../utils/constants";
import { addItem } from "../utils/Slices/cartSlice";

const RestaurantMenuCard = (info) => {
  const { name, isVeg, imageId } = info.data;
  const price = info.data.price || info.data.defaultPrice;

  const rating = info.data.ratings.aggregatedRating.rating || "";
  const ratingCountV2 = info.data.ratings.aggregatedRating.ratingCountV2 || "";
  const description = info.data.description;

  const dispatch = useDispatch();

  const handleAddItem = (info) => {
    dispatch(addItem(info));
  };

  return (
    <div className="mx-[20%]  p-2 m-2 text-left">
      <div className="flex justify-between m-6 ">
        <div className="w-[70%]  p-2">
          <h1 className="py-1 font-semibold text-lg">{name}</h1>
          {isVeg ? (
            <img className="w-5" src={VEG_LOGO}></img>
          ) : (
            <img className="w-5" src={NON_VEG_LOGO}></img>
          )}
          <p>&#8377; {price / 100}</p>

          {rating && ratingCountV2 ? `⭐ ${rating} (${ratingCountV2})` : ""}

          <p>{description}</p>
        </div>
        <div>
          <img
            className="w-[200px] h-[160px] p-2  bg-gray-500 mr-3 rounded-xl mt-[6px]"
            src={MENU_ITEM_URL + imageId}
          ></img>
          <button
            onClick={() => handleAddItem(info)}
            className="cursor-pointer mx-10 -mt-6 absolute px-10 py-2 bg-black text-white font-bold text-lg rounded-lg"
          >
            ADD
          </button>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default RestaurantMenuCard;
