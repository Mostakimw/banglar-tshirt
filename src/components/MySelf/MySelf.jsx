import React, { useContext } from "react";
import Special from "../Special/Special";
import { FamilyContext } from "../Father/Father";

const MySelf = ({ ring }) => {
  const myMoney = useContext(FamilyContext);
  return (
    <div>
      <h2>MySelf</h2>
      <p>Money: {myMoney}</p>
      <Special ring={ring}></Special>
    </div>
  );
};

export default MySelf;
