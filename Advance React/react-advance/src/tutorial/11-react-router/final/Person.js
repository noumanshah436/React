import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';


const Person = () => {

	const [name, setName] = useState("default name");
	const { id } = useParams(); //  returns an object

	// console.log(useParams()); // {id: "1"}

	useEffect(() => {
		const newPerson = data.find((person) => person.id === parseInt(id));
		setName(newPerson.name);
	}, [id]);


	return (
		<div>
      <br />
			<h1>{name}</h1>
			<Link to="/people" className="btn">
				Back To People
			</Link>
		</div>
	);
};

export default Person;
