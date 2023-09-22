import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	// in previous file we first import useState and use it
	// Here is another way without importing useState, use it directly from React
	// 4:06:00
	const [people, setPeople] = React.useState(data);

	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id); // we are not adding person with that id to new array
		setPeople(newPeople); //  we are setting new Array to people
	};

	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				// to render a list we need to have the key prop
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				);
			})}

			<button className="btn" onClick={() => setPeople([])}>
				clear items
			</button>
		</>
	);
};

export default UseStateArray;


// *************************

// show people list with remove button and
// clear button
