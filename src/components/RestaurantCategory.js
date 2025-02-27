import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantCategory = ({ showItems, setShowIndex, data }) => {
  const { itemCards, title } = data;

  const handleShowItems = () => {
    setShowIndex(showItems ? null : title);
  };
  return (
    <div>
      <div
        onClick={handleShowItems}
        className="mx-[22%] my-2 p-2 bg-gray-100 flex justify-between shadow-lg"
      >
        <h1 className=" mt-2 p-2 font-bold text-xl">{title}</h1>
        {showItems == false ? (
          <p className="mr-5 mt-4 font-extrabold">⬇️</p>
        ) : (
          <p className="mr-5 mt-4  font-extrabold">⬆️</p>
        )}
      </div>
      {showItems &&
        itemCards.map((c, index) => (
          <RestaurantMenuCard key={index} data={c?.card?.info} />
        ))}

      <div className="shadow-2xl"></div>
    </div>
  );
};

export default RestaurantCategory;
