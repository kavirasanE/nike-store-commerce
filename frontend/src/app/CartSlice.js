import {createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'

const initialState = {
    cartState: false,
    cartItems:localStorage.getItem("cart") ? JSON.parse  (localStorage.getItem("cart")) :[]
  //let be a database
 };

const CartSlice =createSlice({
     initialState,
     name:'cart',
     reducers:{
        setOpenCart :( state,action) => {
            state.cartState =action.payload.cartState;
        },
        setCloseCart: (state,action) => {
          state.cartState =action.payload.cartState;
        },
        setAddItemToCart :(state,action) => {
          const itemIndex = state.cartItems.findIndex ( (item) => item.id === action.payload.id );
          if(itemIndex >=0){
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.success(`Item Qty Increased`)
          } else {
            const temp ={...action.payload , cartQuantity:1};
            state.cartItems.push(temp)
            toast.success(`${action.payload.title} added to cart`)
          }
          localStorage.setItem('cart' , JSON.stringify(state.cartItems));
        },
     },
});
export const { setCloseCart,setOpenCart,setAddItemToCart } = CartSlice.actions;
export const selectCartState =(state) => state.cart.cartState
export const selectCartItems =(state) => state.cart.cartItems
export default CartSlice.reducer;