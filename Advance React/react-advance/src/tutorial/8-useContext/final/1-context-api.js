import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

// PersonContext.Provider => should wrap the whole component tree

const ContextAPI = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	// as for value, we are in JSX
	//  so the first {} for javascript world and second {} for object
	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const mainData = useContext(PersonContext);
	console.log(mainData);
	return (
		<>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext);  // destructuring

	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;

/*
useContext is the hook.

1) craete hook:
	const PersonContext = React.createContext();
	// two components - Provider, Consumer

******************************
2) wrap root component , and pass value for the down tree components( can be object, string function or anything):

	<PersonContext.Provider value="Hello">
		<h3>Context API / useContext</h3>
		<List />
	</PersonContext.Provider>

******************************
3) use useContext to access value in the downward components with prop drilling:

	const data = useContext(PersonContext);
	console.log(data); // Hello


*/
