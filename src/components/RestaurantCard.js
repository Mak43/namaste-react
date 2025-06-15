import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // const {resName,cuisine, rating} = props; // destructing of props
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-xl bg-gray-100">
      <img
        className="rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="card-logo"
      />
      <h3 className="font-bold px-4">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
