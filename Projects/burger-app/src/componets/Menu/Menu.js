import React from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-10 mx-auto bg-white p-3 menu text-center">
        <h3 className="text-center">
          Total Price : ${props.totalPrice.toFixed(2)}
        </h3>
        <hr />
        {props.itemsList.map((item) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              handlePrice={props.handlePrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
