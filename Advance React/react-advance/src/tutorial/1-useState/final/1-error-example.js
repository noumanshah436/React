import React from 'react';

const ErrorExample = () => {
	let title = "random title";

  // 3:48:00
	// we are changing the title in event handler ,
	//    but when we click the button , it will not change the tile in the JSX
	// The problem is, we are not re-renderring the componenet (also need to preserve value of title between renders)
  // we will use state-hook to sove this problem
	const handleClick = () => {
		title = "hello people";
		console.log(title);
	};

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button type="button" className="btn" onClick={handleClick}>
				change title
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
