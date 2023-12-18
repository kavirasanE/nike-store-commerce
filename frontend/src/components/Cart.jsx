import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  return (
    <>
      <div className={` fixed blur-effect-theme top-0 left-0 bottom-0 right-0 w-full h-screen z-[250] opacity-100`}>
        <div className={`blur-effect-theme h-screen max-w-lg w-full absolute right-0 `}>
            <CartCount/>
            <CartEmpty/>
            <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
