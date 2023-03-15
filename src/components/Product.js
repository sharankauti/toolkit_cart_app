import React from "react";

import "./Product.css";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Product = ({ name, id, imgURL, price }) => {


  const dispatch = useDispatch()
  const handleADD = ()=>{
    dispatch(cartActions.addToCart({
      id,
      name,
      price
    }))
  }

 

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleADD}>Add to cart</button>
    </div>
  );
};

export default Product;
