import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    props.resData.info;

  const lowercaseImageId = cloudinaryImageId.toLowerCase();
  const jpgIndex = lowercaseImageId.indexOf(".jpg");
  const sanitizedCloudinaryImageId =
    jpgIndex !== -1
      ? cloudinaryImageId.substring(0, jpgIndex + 4)
      : cloudinaryImageId;
  return (
    <div className="mx-2 w-[200px]  shadow-lg hover:border-1 border-black border-solid text-black">
      <img
        className="mx-1 my-2 w-[192px] h-[185px] p-2 "
        src={RESTAURANT_IMAGE_URL + sanitizedCloudinaryImageId}
      />

      <p className="ml-3 p-2 font-bold">{name}</p>
      <p className="p-1 ml-3 ">{"⭐ " + avgRating}</p>
      <p className="p-1 ml-3">{costForTwo}</p>
      <p className="p-1 ml-3">{cuisines.join(" , ")}</p>
    </div>
  );
};

export default RestaurantCards;
