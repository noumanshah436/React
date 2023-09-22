import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);

	const removeItem = (id) => {

		// using functional approach we can access old state value parameter

		setPeople((oldPeople) => {
			let newPeople = oldPeople.filter((person) => person.id !== id); // we are not adding person with that id to new array
			return newPeople;
			// whatever we return will be the new state value.
            // We need to always return something from this function, 
            //   otherwise our state value will be undefined
		});

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

// Birthday reminder
// https://react-projects.netlify.app/
// https://www.youtube.com/watch?v=a_7Z7C_JCyo
