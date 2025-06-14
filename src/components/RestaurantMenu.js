import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
