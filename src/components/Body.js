import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Link } from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  //state variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListofRestaurants] = useState([]);

  useEffect(() => {
    // console.log("post comp render");
    fetchData();
    const timer = setInterval(()=>{
      console.log("krte raho")
    },1000);
    return ()=>{
      console.log("unmounting phase");
      clearInterval(timer);
    }
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
    console.log(listOfRestaurants);
  };
  const onlineStatus =  useOnlineStatus();

  if(onlineStatus === false)
  return <h1>looks like your internet is down</h1>

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
       
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurants?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
        {/* comments in JSX*/}
      </div>
    </div>
  );
};

export default Body;
