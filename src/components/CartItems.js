import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems);

  return (
    <div className="cart-container">
      {cartItems.length<=0 && <h2>cart Empty</h2>}
      {cartItems>0 && <h2>Your Cart</h2>}
      <ul>
        
          {cartItems.map((item)=>{
            return(
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              total = {item.totalPrice} 
              totalQuantity = {item.quantity}
            />
            )
          })}
        
      </ul>
    </div>
  );
};

export default CartItems;
