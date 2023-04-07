import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (!cart.length) {
    message = "please add some products";
  } else {
    message = "You are a boroloxxx add more";
  }
  return (
    <div>
      <h2 className={cart.length == 2 ? "orange" : "violet"}>
        Order Summary: {cart.length}
      </h2>
      {message}
      {cart.length > 2 ? <p>Add all of them</p> : <p>You are a gorib</p>}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
