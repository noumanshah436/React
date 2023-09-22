import { useState } from "react";

import React from "react";

function AppFunction(props) {
  const [name, setName] = useState("Nouman");
  const [age, setAge] = useState(100);
  const [isMale, setIsMale] = useState(true);

  return (
    <div>
      <h4>My name is {name}</h4>
      <h4>My age is {age}</h4>
      <h4>I am is {isMale ? "Male" : "Female"}</h4>
      <h4>I am feeling {props.emotion}</h4>
    </div>
  );
}

export default AppFunction;
