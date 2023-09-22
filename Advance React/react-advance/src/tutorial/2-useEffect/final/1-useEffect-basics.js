import React, { useState, useEffect } from "react";

// by default useEffect will run after every time we render a component
// cleanup function
// second parameter

const UseEffectBasics = () => {
	// useState
	const [value, setValue] = useState(0);

	// useEffect( ()=>{} )
	useEffect(() => {
		console.log("call useEffect");
		//  we cannot place hooks inside the conditionals
		//  but we can use if/else inside of the callback function of hook
		if (value > 0) {
			document.title = `New Messages(${value})`;
		}
	});

	console.log("render component");
	return (
		<>
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				click me
			</button>
		</>
	);
};

export default UseEffectBasics;

/*


useEffect : work outside of the component

Each component have their own useEffect which will execute after component rendered

Their work could be
	change doc title ,
	fetching data,
	setting up the event listener

****************************

useEffect second parameter , that is dependency array

1) if we do not pass second parameter then useEffect will run every time we render a component

2) if we pass it an empty dependency array then useEffect will run only on initial render

3) If we give any value( also called dependency , it can be useState value or variable of any type ) in dependency array
 then useEffect will also run if that value changes. **   5:04:00

4) we can have more than one useEffect in a component ,
    suppose one useEffect  will run when dependency_array's value changes
	and the second useEffect that run only on initial render ( we pass empty array to it )


Note: see 3rd file fetch data
	if the useEffect callback function is triggerring re-render ( calling setValue of useState ),
	make sure that you add the dependency array in the useEffect functiona as second argument
	otherwise there will be an infinite loop ( re-render again and call useEffect again)

*/
