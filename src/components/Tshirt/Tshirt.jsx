import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handlerBuyNow }) => {
  const { _id, name, price, picture } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handlerBuyNow(tshirt)} className="buy-now-btn">
        Buy Now
      </button>
    </div>
  );
};

export default Tshirt;
