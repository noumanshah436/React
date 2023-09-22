export const reducer = (state, action) => {
	// state : old state
  // action : action object comming from dispatch function

	if (action.type === "ADD_ITEM") {
		const newPeople = [...state.people, action.payload];  

		return {
      // to return new State you
			// must always copy the previous state and
      // just override those properties you want to update
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: "item added",
		};
	}

	if (action.type === "NO_VALUE") {
		return { ...state, isModalOpen: true, modalContent: "please enter value" };
	}

	if (action.type === "CLOSE_MODAL") {
		return { ...state, isModalOpen: false };
	}

	if (action.type === "REMOVE_ITEM") {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload
		);
		return { ...state, people: newPeople };
	}

	throw new Error("no matching action type");
};
