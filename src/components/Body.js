import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Link } from 'react-router'

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  //state variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListofRestaurants] = useState([]);

  useEffect(() => {
    // console.log("post comp render");
    fetchData();
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

  //conditional rendering option 1

  // if(listOfRestaurants.length === 0)
  // {
  //   return <Shimmer/>
  // }

  //conditional rendering option 2
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-card-container">
        {filterListOfRestaurants?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
        {/* comments in JSX*/}
      </div>
    </div>
  );
};

export default Body;
