import React, { useState, useTransition } from "react";

function Test() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);

    // setting low priority to given code in function
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default Test;

// https://www.youtube.com/watch?v=N5R6NL3UE7I

// useTransition:
//   used to set low priority to some piece of code that cause performance issue,
//   When all the normal works is done , then this code will execute.

// one disadvantage of useTransition is that it renders Application more times than normal.


// *****************************

// https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue

// useTransition() gives you full control since you decide which code should be wrapped and treated as "low priority".
// Sometimes though, you might not have access to the actual state updating code (e.g., because it's performed by some third-party library).
// Or, for some reason, you can't use useTransition().

// In such cases, you could use useDeferredValue() instead.

// With useDeferredValue(), you don't wrap the state updating code but instead the value that's in the end generated or changed
// because of the state update (either the state value itself or some value that's computed based on the state value).
