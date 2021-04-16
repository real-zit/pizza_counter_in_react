import React, { useState } from "react";
import Pizza from "./pizzas.png";
import "./burger.css";

const Burger = () => {
  const [numPizza, setPizza] = useState(0);
  const handleClick = () => {
    if (numPizza <= 0) {
      setPizza(0);
    } else {
      setPizza(numPizza - 1);
    }
  };

  return (
    <div className="body">
      <div className="text">
        <img src={Pizza} alt="pizza" />
        <h1 className="header">Pizza order count</h1>
        <div className="num">
          <h3>{numPizza}</h3>
        </div>
        <button className="button" onClick={() => setPizza(numPizza + 1)}>
          {" "}
          Take Order
        </button>
        <button className="button" onClick={handleClick}>
          {" "}
          Cancel Order{" "}
        </button>
      </div>
    </div>
  );
};

export default Burger;
