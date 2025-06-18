import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  // const {resName,cuisine, rating} = props; // destructing of props
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  const dataContext = useContext(UserContext);
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
      <h4>{dataContext.loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-2xl">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
