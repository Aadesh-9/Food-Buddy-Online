import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmerUI/Shimmer";
import useGetRestaurantMenu from "../utils/hooks/useGetRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const [show1, setShow1] = useState(1);
  const [show2, setShow2] = useState(0);
  const [show3, setShow3] = useState(0);
  const [show4, setShow4] = useState(0);
  const [show5, setShow5] = useState(0);
  const [show6, setShow6] = useState(0);

  const { resId } = useParams();
  const resMenu = useGetRestaurantMenu(resId);

  if (resMenu == null) return <Shimmer />;
  let itemCards1 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;
  if (itemCards1 === undefined)
    itemCards1 =
      resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card.itemCards;

  if (itemCards1 === undefined)
    itemCards1 =
      resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card.itemCards;

  if (itemCards1 === undefined)
    itemCards1 =
      resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.categories[0].itemCards;

  const itemCards2 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards ||
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.categories[1]?.itemCards;

  const itemCards3 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards;

  const itemCards4 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
      ?.card?.itemCards;

  const itemCards5 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card?.itemCards;

  const itemCards6 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
      ?.card?.itemCards;

  const title1 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.title;

  const title2 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.title;

  const title3 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.title;

  const title4 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
      ?.card?.title;
  const title5 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card?.title;
  const title6 =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
      ?.card?.title;

  const { name } = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      {itemCards1 && title1 ? (
        <div className="mx-[15%] my-12">
          <h1 className="p-6 mb-6 text-center font-bold text-2xl ">{name}</h1>
          <div className="">
            <h2
              onClick={() => {
                setShow1(!show1);
              }}
              className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
            >
              {title1}{" "}
              {show1 ? (
                <span className="mr-5 font-extrabold">^</span>
              ) : (
                <span className="mr-5 font-extraboldbold">&#8964;</span>
              )}
            </h2>
          </div>
          {show1 ? (
            <div>
              {itemCards1.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {itemCards2 && title2 ? (
        <div className="mx-[15%] my-12">
          <h2
            onClick={() => {
              setShow2(!show2);
            }}
            className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
          >
            {title2}{" "}
            {show2 ? (
              <span className="mr-5 font-extrabold">^</span>
            ) : (
              <span className="mr-5 font-extraboldbold">&#8964;</span>
            )}
          </h2>
          {show2 ? (
            <div>
              {itemCards2.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {itemCards3 && title3 ? (
        <div className="mx-[15%] my-12">
          <h2
            onClick={() => {
              setShow3(!show3);
            }}
            className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
          >
            {title3}{" "}
            {show3 ? (
              <span className="mr-5 font-extrabold">^</span>
            ) : (
              <span className="mr-5 font-extraboldbold">&#8964;</span>
            )}
          </h2>
          {show3 ? (
            <div>
              {itemCards3.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {itemCards4 && title4 ? (
        <div className="mx-[15%] my-12">
          <h2
            onClick={() => {
              setShow4(!show4);
            }}
            className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
          >
            {title4}{" "}
            {show4 ? (
              <span className="mr-5 font-extrabold">^</span>
            ) : (
              <span className="mr-5 font-extraboldbold">&#8964;</span>
            )}
          </h2>
          {show4 ? (
            <div>
              {itemCards4.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {itemCards5 && title5 ? (
        <div className="mx-[15%] my-12">
          <h2
            onClick={() => {
              setShow5(!show5);
            }}
            className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
          >
            {title5}
            {show5 ? (
              <span className="mr-5 font-extrabold">^</span>
            ) : (
              <span className="mr-5 font-extraboldbold">&#8964;</span>
            )}
          </h2>
          {show5 ? (
            <div>
              {itemCards5.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {itemCards6 && title6 ? (
        <div className="mx-[15%] my-12">
          <h2
            onClick={() => {
              setShow6(!show6);
            }}
            className=" p-6 text-left font-bold text-2xl  w-full flex justify-between items-center border-1 border-black border-solid rounded-lg"
          >
            {title6}{" "}
            {show6 ? (
              <span className="mr-5 font-extrabold">^</span>
            ) : (
              <span className="mr-5 font-extraboldbold">&#8964;</span>
            )}
          </h2>
          {show6 ? (
            <div>
              {itemCards6.map((item) => (
                <li className="list-none" key={item?.card?.info?.id}>
                  <RestaurantMenuCard menuData={item} />
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantMenu;
