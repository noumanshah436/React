import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((prop, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment,
  }));

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={increment}>Child Click</button>
    </div>
  );
});

export default Child;


// using useImperativeHandle we can provide child-function to parent ref
// and parent can call that child-function

// we can pass parent ref to child using forwardRef


// a= (()=>{return "Nouman"})
// a();                                 // Nouman
