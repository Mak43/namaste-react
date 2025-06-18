import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  //state variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListofRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const dataContext = useContext(UserContext);
  console.log(dataContext.loggedInUser);
  useEffect(() => {
    // console.log("post comp render");
    fetchData();
    const timer = setInterval(() => {
      console.log("krte raho");
    }, 1000);
    return () => {
      console.log("unmounting phase");
      clearInterval(timer);
    };
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    //optional chaining ?
    setListofRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); //data from Swiggy Api
    setFilterListofRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(UserContext);

  if (onlineStatus === false) return <h1>looks like your internet is down</h1>;
  console.log(listOfRestaurants);

  //conditional rendering option 2
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="flex">
        <div className="m-4">
          <input
            type="text"
            className="border to-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-4 px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListofRestaurants(filteredList);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4">
          <button
            className="m-4 px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilterListofRestaurants(filteredList);
            }}
          >
            filter restaurant
          </button>
        </div>
        <div className="m-4 px-4 py-2">
          <label>UserName: </label>
          <input className="border border-b" type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
        {/* comments in JSX*/}
      </div>
    </div>
  );
};

export default Body;
