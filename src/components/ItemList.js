import {useDispatch} from "react-redux"
import { addItems } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItems= (item) =>{
    dispatch(addItems(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-b-2 text-left">
            <div>
                <span className="font-bold">{item.card.info.name} </span>
                <span> - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            <div>             
              <button className="font-bold hover:cursor-pointer" onClick={()=>handleAddItems(item)}>add +</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
