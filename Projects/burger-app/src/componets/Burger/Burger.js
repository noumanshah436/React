import React from "react";

import "./burger.css";
import getItems from "./getItems";


const Burger = ({ itemsList, itemCount }) => {
  const itemsdiv = getItems(itemsList, itemCount);
  return (
    <div className="row ">
      <div className="col-lg-7 col-10 mx-auto bg-white p-5">
        <div className="burger-plate p-5">
          <div className="slice uper-slice " /> 
          {itemsdiv}
          <div className="slice lower-slice" />
        </div>
      </div>
    </div>
  );
};

export default Burger;
