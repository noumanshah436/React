import React, { useState } from "react";
// short-circuit evaluation
// ternary operator --> { condition ? true_block : false_block }

const ShortCircuit = () => {
	const [text, setText] = useState(""); // empty string evaluates to false , otherwise true
	const [isError, setIsError] = useState(false);

	// const firstValue = text || 'hello world';   //  if text is empty then return 'hello world'
	// const secondValue = text && 'hello world';  //  if text is there then return 'hello world'

	return (
		<>
			{/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1>
       {if(){console.log('hello world')}} */}

			{/* short-circuit evaluation */}
			<h1>{text || "john doe"}</h1>
			{/* if  text is empty return "john doe" */}

			<button className="btn" onClick={() => setIsError(!isError)}>
				toggle error
			</button>

			{isError && <h1>Error...</h1>}

			{/* ternary operator */}
			{isError ? (
				<h2>there is an error...</h2>
			) : (
				<div>
					<h2>there is no error</h2>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;

/*

Short - Circuit Evaluation
(we can check it in console log )

****************

0 || 1 => 1

1 || 1 => 1

10 || 12  =>  10

'' || 'Nouman'  =>   "Nouman"

'User' || 'Nouman' =>  "User"

****************

0 && 1   => 0

1 && 1   => 1

10 && 12     =>    12

'' && 'Nouman' =>     ""

'User' && 'Nouman'  =>  "Nouman"


*/
