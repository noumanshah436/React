import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// React Redux Tutorials - 26 - mapStateToProps (ownProps understanding)
// https://www.youtube.com/watch?v=prg6YzRcEvE&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=26
