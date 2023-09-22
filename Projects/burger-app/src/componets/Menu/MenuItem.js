import React from "react";

const MenuItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-3">
        <h6>{props.item.itemName}</h6>
      </div>
      <div className="col-3">
        <button
          className="btn btn-success"
          onClick={(e) =>
            props.handlePrice(props.item.price, props.item.itemName, "add")
          }
        >
          More
        </button>
      </div>
      <div className="col-3">
        <button
          className="btn btn-danger"
          disabled={props.item.count === 0}
          onClick={(e) =>
            props.handlePrice(props.item.price, props.item.itemName, "less")
          }
        >
          Less
        </button>
      </div>
      <div className="col-3">${props.item.price}</div>
    </div>
  );
};

export default MenuItem;
