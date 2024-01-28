import React from "react";

class TODO extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			items: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}

		const newItem = {
			text: this.state.text,
			id: Date.now(),
		};

		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: "",
		}));
	}

	render() {
		return (
			<div>
				<h1>Todo Application</h1>

				<TODOList todoItems={this.state.items} />

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="id">Input Item : </label>
					{/* <label>{this.state.text}</label> */}
					<input
						type="text"
						id="id"
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default TODO;

// in react when you create component , you can either create a function or you can create class
class TODOList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todoItems.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		);
	}
}
/*
 props is used to get data from parent  

*/
