import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	//  useEffect will run after every render
	useEffect(() => {
		console.log("useEffect");
		window.addEventListener("resize", checkSize);

		// before it call the useEffect one more time , it will cleanup first.
		// before calling UseEffect for the next time, It will run the cleanup function first .
		return () => {
			console.log("cleanup");
			window.removeEventListener("resize", checkSize);
		};
	}, []);

	// actually we don't need cleanup here , we can set up only initial render by passing [] to solve the problem of setting tons of event listeners each time we call useEffect,
	//  and now useEffect will only once and  for that case cleanup will only run at the end when component is removed from the DOM .( see 3-show-hode.js in conditional renderring)
	// we just use this example for understanding cleanup function

	console.log("render");
	return (
		<>
			<h1>window</h1>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;

/*

1) first time we render the component , useEffect run after that and it add eventListener to window ( but cleanup will not run at that time )
2) If the added event occur and checkSize function is caled and we call setSize in it

3) SetSize will re-render the component .
	However before it run the UseEffect after that render, It will run the cleanup function first and
	then the body of UseEffect will run afetr cleanup function.

******************************

when we set up only initial render in useEffect by passing [] , it solve the problem of setting tons of event listeners each time we call useEffect ,
and  now useEffect will only once and  for that case cleanup will only run at the end when component is removed from the DOM .
( see 3-show-hode.js in conditional renderring)


*/
