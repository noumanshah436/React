import React from "react";
import ReactDom from "react-dom";

// Nested Components , React Tools

function Greeting() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}

// function Person() {     //  this will also work
// 	return <h1>Syed Nouman</h1>;
// }

const Person = () => <h1>Syed Nouman</h1>;
const Message = () => {
	return <p>This is my message</p>;
};
ReactDom.render(<Greeting />, document.getElementById("root")); // self closing tag

// ***********************************

import React from "react";
import ReactDom from "react-dom";

// Nested Components , React Tools

function Greeting() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h1>Syed Nouman</h1>;
const Message = () => {
	return (
		<div>
			<SubMessage />
			<p>This is my message</p>
		</div>
	);
};
const SubMessage = () => <h2>sub Message</h2>;

ReactDom.render(<Greeting />, document.getElementById("root"));

// **************************

import React from "react";
import { createRoot } from "react-dom/client";

// Nested Components , React Tools

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
    alt=" "
  />
);
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);

