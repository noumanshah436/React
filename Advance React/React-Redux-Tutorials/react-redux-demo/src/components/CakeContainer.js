import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// In this function the state from the redux-store is mapped to our component props.
// So apart from whatever props our component is receiving, it will now receive an aditional prop called `numOfCakes`,
//  which reflects the numOfCakes in the redux-store.
const mapStateToProps = (state) => {
  return {
    // here we retrieve the appropriate state property and map it with the prop which will be automatically received as component props.
    // This allows us to use props.numOfCakes in our component
    numOfCakes: state.cake.numOfCakes,
  };
};

// this function will map our dispatch of an action-creator to a prop in our component.
// so now our component will receive a second additional prop called `buyCake` which will basically dispatch the buyCake action.
const mapDispatchToProps = (dispatch) => {
  return {
    // Map action-creator to props in our component.
    // This allows us to use props.buyCake to dispatch action in our component.
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

// connect function:
//    connect function basically connects a react component to the redux store,
//    so that our component can access the state and dispatch actions.

// How to connect:
// 1) create mapStateToProps function that takes state as an argument and returns the mapped object (map state to props).
// 2) create mapDispatchToProps function that takes dispatch as an argument and return the mapped object (map action-creator to props).
// 3) connect these two functions with the react component and export it.

// https://www.youtube.com/watch?v=gFZiQnM3Is4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=18
