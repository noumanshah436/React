import React, { useState } from "react";

const UseStateObject = () => {

  // creating useState
	const [person, setPerson] = useState({
		name: "peter",
		age: 24,
		message: "random message",
	});

	const changeMessage = () => {
		// using spread operator we are passing the old values of object
		// and passing the attribute to ovverride its value
		setPerson({ ...person, message: "hello world" });
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h4>{person.message}</h4>
			<button className="btn" onClick={changeMessage}>
				change message
			</button>
		</>
	);
};

export default UseStateObject;

// ********************
//  its important to preserve previous state value
