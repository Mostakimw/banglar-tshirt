import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);
  const handlerBuyNow = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      toast("Already added this product");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    let removeItem = cart.filter((ts) => ts._id !== id);
    setCart(removeItem);
  };
  return (
    <div className="shop-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handlerBuyNow={handlerBuyNow}
          ></Tshirt>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
