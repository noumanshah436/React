import React, { useState, useEffect } from "react";

const ShowHide = () => {
	console.log("ShowHide");
	const [show, setShow] = useState(false);
	return (
		<>
			<button className="btn" onClick={() => setShow(!show)}>
				show/hide
			</button>

			{/* Show/Hide Component  */}
			{ show && <Item /> }
		</>
	);
};

const Item = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		console.log("CheckSize");
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log("useEffect");
		// every time we toggle the component, it will add EventListener to window
		// so even we use dependency array , we need cleanup function
		// so when we remove the component from the DOM using toggle  {show && <Item />} ,
		// it will call cleanup function

		window.addEventListener("resize", checkSize);
		return () => {
			console.log("CleanUP Function");
			window.removeEventListener("resize", checkSize);
		};
	}, []);

	console.log("render");

	return (
		<div style={{ marginTop: "2rem" }}>
			<h1>Window</h1>
			<h2>size : {size}</h2>
		</div>
	);
};

export default ShowHide;
