import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {
const totalItems = useSelector((state)=> state.cart.cartItems)
const dispatch = useDispatch()
const handleCart = ()=>{
  dispatch(cartActions.setShowCart())
}
  return (
    <div className="cartIcon" >
      <h3 onClick={handleCart}>Cart: {totalItems.length}Items</h3>
    </div>
  );
};

export default Cart;
