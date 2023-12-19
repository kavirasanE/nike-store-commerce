import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCartState, setCloseCart } from "../app/CartSlice.js";

const Cart = () => {
  const dispatch =useDispatch();
  const ifCartState =useSelector(selectCartState)
  const onCartToggle = () => {
     dispatch (setCloseCart({
      cartState: false
     }))
  }
  return (
    <>
      <div className={` fixed blur-effect-theme top-0 left-0 bottom-0 right-0 w-full h-screen z-[250] duration-200 opacity-100 ${ifCartState ? 'opacity-100 visible translate-x-0' :'opacity-0 invisible translate-x-8'}`}>
        <div className={`blur-effect-theme h-screen max-w-lg w-full absolute right-0 `}>
            <CartCount onCartToggle ={onCartToggle}/>
            <CartEmpty/>
            <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
