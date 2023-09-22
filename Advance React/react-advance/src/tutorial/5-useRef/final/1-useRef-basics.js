import React, { useEffect, useRef } from "react";
// useRef is similar to useState but have some differences

// useRef:
// preserves value
// DOES NOT trigger re-render

// useRef mostly used to target DOM nodes/elements
// useRef can be used with any html element

const UseRefBasics = () => {
  // crearing useRef
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    // console.log(e.target);
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  // don't worry about about dependency array because useRef dont't re-render
  useEffect(() => {
    console.log("useEffect");
    console.log(refContainer.current);
    refContainer.current.focus();
    // console.log(divContainer.current)
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>

      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;

// ********************

// add attribute 'ref' to element and grab that element by ---Container.current
