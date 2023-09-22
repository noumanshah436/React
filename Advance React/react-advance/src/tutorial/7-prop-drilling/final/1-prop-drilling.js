import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people, removePerson }) => {   // destructure props directly
	return (
		<>
			{people.map((person) => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				);
			})}
		</>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	// console.log('prop:');
	// console.log(prop);
	// let { id, name, removePerson } = prop;

	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default PropDrilling;


/*

Prop Drilling:

To pass  removePerson  function to SinglePerson component we need to pass it to all
the predecessor of that component and then we destructure it in all these components.

First we pass removePerson  to List component , which further pass it to
SinglePerson and that will use that function , this is called prop drilling.

We need to pass that function from root componentn down to that component that is looking for that function.
IN context api we will fix it.


*/
/*

console log:

myobj ={ id:1, name:"Noumna"}
{id: 1, name: "Noumna"}

let {id , name}= myobj;
undefined

id
1

name
"Noumna"

*/
