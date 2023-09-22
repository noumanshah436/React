import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  useEffect(() => {
    console.log("first useEffect");
  }, []);

  useEffect(() => {
    console.log("2nd useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("1st  useLayoutEffect");
  }, []);

  console.log("render");
  return <div>useLayoutEffect</div>;
};

export default LayoutEffect;


// https://www.youtube.com/watch?v=-owNOV39q1w

// useLayoutEffect: runs synchronously after a render but before the screen is updated
// useEffect: runs asynchronously and after a render is painted to the screen ( i.e useEffect runs after the dom has been painted )

//  if we want something to be present before screen is updated, we will use useLayoutEffect


// ********************
// output:

// render
// 1st  useLayoutEffect
// first useEffect
// 2nd useEffect
