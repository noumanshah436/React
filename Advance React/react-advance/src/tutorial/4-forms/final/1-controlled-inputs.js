import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (firstName && email) {
			// const person = { id: new Date().getTime().toString(), firstName=firstName, email=email };

			// In latest ES6, if the key name matches the variable that holds the value ,
			// we can reduce  { firstName=firstName } it to simple {firstName} , and it works the same

			const person = { id: new Date().getTime().toString(), firstName, email };
			console.log(person);

			setPeople((people) => {
				// people = [{},{}]       //  give old list or state
				// ...people = {},{}      // give items of list i.e objects
				return [...people, person]; // this returned list will be be the new state value
			});

			setFirstName("");
			setEmail("");
		} else {
			console.log("empty values");
		}
	};

	return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            {/* htmlFor takes id of the input */}
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* submit button will reload the page on submit , so we will prevent it  */}
          <button type="submit">add person</button>
          {/* <button type="submit" onClick={handleSubmit}>add person </button> */}
        </form>

        {/*
        1) we can use onSubmit={handleSubmit} on form
        2) or we can add onClick={handleSubmit} on the submit button */}

        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
