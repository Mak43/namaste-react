import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  //   console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log("usetate :\n" + useState());

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9943266&lng=77.66681799999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData);
  };

  if (resInfo === null) return <Shimmer />;
  
  const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { carousel } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(carousel);

  return (
    <div>
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <p>
          {carousel?.map((item) => {
            return <li key={item.dish.info.id}>{item.dish.info.name}</li>;
          })}
        </p>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
