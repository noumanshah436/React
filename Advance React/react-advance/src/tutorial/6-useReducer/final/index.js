import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";
// reducer function:
//    Takes the old state and give back the new state
//    You must return the new state from the reducer
//  ********************
//  IN order to do anything with state of useReducer we need
//  to dispath with action object , which will call reducer function behind the scene

import { reducer } from "./reducer";

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
};

const Index = () => {
	const [name, setName] = useState("");

	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name) {
			const newItem = { id: new Date().getTime().toString(), name };
			// here we set the dispatch function with the action object
			//  and in the reducer function we can catch this objcet
			// so notice , we are not directly affecting state, it's not like setName, setPeole as in useState
			// we can only control the state when we dispatch the action
			// and then in reducer , we deal with our state
			//  so it is more structured, it is less prone to errors or bugs

			dispatch({ type: "ADD_ITEM", payload: newItem });  // just a naming convention to pass more items to action-object as payload
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};

	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};

	return (
		<>
			{state.isModalOpen && (
				<Modal closeModal={closeModal} modalContent={state.modalContent} />
			)}

			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit">add</button>
			</form>

			{state.people.map((person) => {
				return (
					<div key={person.id} className="item">
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({ type: "REMOVE_ITEM", payload: person.id })
							}
						>
							remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
