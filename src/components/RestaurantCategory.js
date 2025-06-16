import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showList, setShowList] = useState(false);
    const handleClick= () =>{
        setShowList(!showList);
    }
  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
        <div className=" justify-between flex cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showList && <ItemList items={data.itemCards} key={data.title} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
