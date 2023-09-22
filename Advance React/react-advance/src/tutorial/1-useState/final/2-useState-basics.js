import React, { useState } from "react";

// Thing related to all hooks ( hooks from react or user defined ):

// 1) name of hook starts with use ( useEffect , useState , useCallback, useMemo)
// 2) component must be uppercase ( like UseStateBasics)
// 3) invoke hooks inside function/component body
// 4) we cannot call the hooks conditonally ( we cannot place hooks inside the conditionals )

const UseStateBasics = () => {
	// console.log(useState());  // we can pass any value of any javascript type
	// const value = useState()[0];
	// const handler = useState()[1];
	// console.log(value, handler);

	const [text, setText] = useState("random title");
	
	const handleClick = () => {
		if (text === "random title") {
			setText("hello world");
			// setText(109);
		} else {
			setText("random title");
		}
	};

	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button type="button" className="btn" onClick={handleClick}>
				change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;

/*
 *************  useState Hook Understanding  *************

// https://www.geeksforgeeks.org/what-is-usestate-in-react/
// https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/

 // useState is basiccaly a function

1)  when we invoke useState function , we will pass default value of any javascript type
    ( string , number , Boolean , object or array ).
2) useState return array with 2 values , [value , controlFunction]
3) Whenever we invoke controlFunction with whatever value we pass , it will be the new state value .

************************

Whenever we call setValue function ( i.e change value) of useState , useState did  two things

1) It preserve the value between the renders
2) Then it triggers rerender

************************

// console.log(useState);
// console.log(useState('Hello World'));
// const value = useState(1)[0];
// const handler = useState(1)[1];
// console.log(value, handler);

*/
