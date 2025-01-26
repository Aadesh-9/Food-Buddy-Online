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
    <div className="card">
      <img
        className="res-logo"
        src={RESTAURANT_IMAGE_URL + sanitizedCloudinaryImageId}
      />

      <p>{name}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{cuisines.join(" , ")}</p>
    </div>
  );
};

export default RestaurantCards;
