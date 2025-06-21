import ItemList from "./ItemList";
import {useSelector, useDispatch} from "react-redux"
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const dispatch = useDispatch();
    const handleItems = () =>{
        dispatch(clearCart());
    }
    const itemCards = useSelector((store)=>store.cart.items);
    return(
        <div className="text-center text-2xl m-4">
            <span>Cart Items</span>
     
        <div className="w-6/12 m-auto">
            <button className="text-black shadow to-white flex cursor-pointer" onClick={handleItems}>clear cart</button>
            <ItemList items={itemCards}/>
        </div>
        </div>
    )
}
export default Cart;