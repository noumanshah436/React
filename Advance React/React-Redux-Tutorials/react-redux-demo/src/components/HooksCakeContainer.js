import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  // useSelector allows components to extract data from the Redux store state.
  // the callback we pass inside useSelector, is called the selector function.
  // useSelector returns, whatever the selector function returns.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;

// useSelector, useDispatch
// These hooks are used as an alternative to the existing connect higher order component.
// They allow us to subscribe to the redux-store and dispatch actions without having to wrap our component with connect fucntion.

// **************************
// useSelector syntax:

// Example: Extracting a specific piece of state from the Redux store

// const myData = useSelector(state => state.myReducer.myData);

// **************************
