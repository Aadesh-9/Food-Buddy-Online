import { MENU_ITEM_URL } from "../utils/constants";

const RestaurantMenuCard = (props) => {
  console.log(props);
  const { name, defaultPrice, isVeg, imageId } = props.menuData.card.info;

  const price =
    props.menuData.card.info.price || props.menuData.card.info.defaultPrice;
  const description = props?.menuData?.card?.info?.description || "";
  const { rating, ratingCountV2 } =
    props.menuData.card.info.ratings.aggregatedRating;
  return (
    <div className="">
      <div className="flex justify-between m-6 ">
        <div className="w-[70%]  p-2">
          <h1 className="p-1  font-bold text-lg">{name}</h1>
          <p>&#8377; {price / 100 || defaultPrice}</p>
          <p> {"⭐ " + rating + " (" + ratingCountV2 + ")"}</p>
          <p>{isVeg}</p>
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
