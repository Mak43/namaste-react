import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length=0;
        }
    }
});

console.log("cart"+ cartSlice);
export const {addItems, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;