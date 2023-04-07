import React, { createContext } from "react";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";

export const FamilyContext = createContext(0);
const Father = ({ ring }) => {
  const money = 100;
  return (
    <div>
      <h2>Father</h2>
      <FamilyContext.Provider value={money}>
        <section className="flex">
          <MySelf ring={ring}></MySelf>
          <Sister></Sister>
          <Brother></Brother>
        </section>
      </FamilyContext.Provider>
    </div>
  );
};

export default Father;
