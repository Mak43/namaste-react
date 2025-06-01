import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestaurants1, setListofRestaurants1] = useState([
    {
      info: {
        id: "49005",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
      },
    },
    {
      info: {
        id: "49006",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 3.4,
      },
    },
    {
      info: {
        id: "49007",
        name: "pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
      },
    },
  ]);
  //state variable
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  //normal js variable
  let listOfRestaurantsJs = [
    {
      info: {
        id: "49005",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
      },
    },
    {
      info: {
        id: "49006",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 3.4,
      },
    },
    {
      info: {
        id: "49007",
        name: "pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/e11f982b-1228-40ec-99ec-c589500d84e3_49005.JPG",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
      },
    },
  ];
  return (
    <div className="res-body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListofRestaurants(filteredList);
          }}
        >
          filter restaurant
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* comments in JSX*/}
      </div>
    </div>
  );
};

export default Body;
