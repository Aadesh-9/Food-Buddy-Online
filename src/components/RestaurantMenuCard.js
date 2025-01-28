import { MENU_ITEM_URL } from "../utils/constants";
import { VEG_LOGO } from "../utils/constants";
import { NON_VEG_LOGO } from "../utils/constants";

const RestaurantMenuCard = (props) => {
  console.log(props);
  const { name, isVeg, imageId } = props.menuData.card.info;

  const price =
    props?.menuData?.card?.info?.price ||
    props?.menuData?.card?.info?.defaultPrice;
  const description = props?.menuData?.card?.info?.description || "";
  const rating =
    props?.menuData?.card?.info?.ratings?.aggregatedRating.rating || "";
  const ratingCountV2 =
    props?.menuData?.card?.info?.ratings?.aggregatedRating.ratingCountV2 || "";
  return (
    <div className="">
      <div className="flex justify-between m-6 ">
        <div className="w-[70%]  p-2">
          <h1 className="py-1  font-bold text-lg">{name}</h1>
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
          <button className="cursor-pointer mx-10 -mt-6 absolute px-10 py-2 bg-black font-bold text-lg rounded-lg">
            ADD
          </button>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default RestaurantMenuCard;
