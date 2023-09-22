import React, { useState } from "react";

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const reset = () => {
		setValue(0);
	};

	// Functional Update Form ( of useState control function )
	const complexIncrease = () => {
		// setTimeout(() => {}, 2000);
		// setTimeout is asynchronous function
		setTimeout(() => {
			// this will not work if we press button more that one time
			// because they will grab the same value when i call all my functions
			// setValue(value + 1);

			// whatever value we will return will be the new state value
			// it is very imp to return new state value
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>
					decrease
				</button>
				<button className="btn" onClick={reset}>
					reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>

			{/* (4:32:10) Functional Update Form */}
			<section style={{ margin: "4rem 0" }}>
				<h2>more complex counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;

/*

setTimeout is asynchronous function , so if we click button more that one time , it will grab the previous value of 'value' state variable .
So if we use  setValue(value + 1) in setTimeout function, it will grab the previous value of 'value' state variable,.

so that's why we use functional approach:
we can pass a function into setValue_function where we can access old state of the value.
whatever we return from this function will be the new state value.
We need to always return something from this function,
otherwise our state value will be undefined

4;41:00


*/
