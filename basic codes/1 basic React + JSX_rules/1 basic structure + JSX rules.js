// creating basic component

import React from "react"; //  React dependency
import { createRoot } from "react-dom/client";  // new syntax


// this function will be a component
// name should start with capital letter
function Greeting() {
	return <h4>This is Nouman , and this is my first component</h4>;
	//  we are returning HTML , which is officially called JSX
}


const root = createRoot(document.getElementById("root"));
// root.render(<Greeting >);   // error , Greeting tag not closed
root.render(<Greeting />);
root.render(<Greeting></Greeting>);

// **********************************

import React from "react";
import ReactDom from "react-dom";

// JSX Rules

// return single element
// div / section / article or Fragment  ( use proper HTML semantics or use React.Fragment as a wrapper of JSX)
// use camelCase for html attributes like onClick
// use className instead of class
// close every element  ( <img src="" alt="" />   or  <img src="" alt=""><\img>)
// formatting ( return JSX in parenthesis so that there will be no formatting  error if any )

function Greeting() {
	return <h4>Hello world</h4>;
}

const Greeting = () => {
	return React.createElement("h1", {}, "Hello World");
	//     createElement ( html_element , props_object , html_element_content )
};

// ********

function Greeting() {
	// return multiple elements  using ( ) and life will be easy
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}

const Greeting = () => {
	// return multiple elements with React.createElement
	return React.createElement(
		"div",
		{},
		React.createElement("h1", {}, "Hello World")
	);
};

// ********

function Greeting() {
	// different ways of wrapping multiple elements in single element
	return (
		// use parent div
		<div>
			<div>
				<h1>Hello World</h1>
				<ul>
					<li>
						<a href="#">click here</a>
					</li>
				</ul>
			</div>
			<div></div>
		</div>
	);

	return (
		<React.Fragment>
			<div>
				<h1>Hello World</h1>
				<ul>
					<li>
						<a href="#">click here</a>
					</li>
				</ul>
			</div>
			<div></div>
		</React.Fragment>
	);

	return (
		<>
			<div>
				<h1>Hello World</h1>
				<ul>
					<li>
						<a href="#">click here</a>
					</li>
				</ul>
			</div>
			<div></div>
		</>
	);
}

// ********


function Greeting() {
	return (
		<div onClick="" className="">
			<div>
				<h1>Hello World</h1>
				<ul>
					<li>
						<a href="#">click here</a>
					</li>
				</ul>
			</div>
			<div></div>
			<img src="" alt="" />
			<input type="text" />
		</div>
	);
}

ReactDom.render(<Greeting />, document.getElementById("root")); // self closing tag

// **********************************


// render in root ( in react 18 )

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// *******or ***********

import React from "react"; //  React dependency
import { createRoot } from "react-dom/client"; // new syntax

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);

// **********************************
