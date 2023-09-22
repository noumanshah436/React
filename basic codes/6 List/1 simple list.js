import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const names = ["Nouman", "Ali", "Ramzan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookList() {
  return <section>{newNames}</section>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
