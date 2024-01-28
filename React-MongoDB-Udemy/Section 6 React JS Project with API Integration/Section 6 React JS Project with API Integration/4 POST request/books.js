import React from "react";

class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allBooks: [],
			singleBook: {
				name: "",
			},
		};
		// we are registring this method for this component
		this.getAllBooks = this.getAllBooks.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddBook = this.handleAddBook.bind(this);
	}

	handleAddBook() {
		console.log(this.state.singleBook.name);
		if (this.state.singleBook.name.length === 0) {
			alert("Book Not Added");
			return;
		}

		fetch("http://localhost:8080/api/books/addBook", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(this.state.singleBook),
		})
			.then(
				this.setState({
					singleBook: { name: "" },
				})
			)
			.catch(console.log);
	}

	handleChange(e) {
		this.setState({
			singleBook: {
				name: e.target.value,
			},
		});
	}

	getAllBooks() {
		// logic to fetch data from API  /api/books
		fetch("http://localhost:8080/api/books")
			.then((res) => res.json()) //  automatically return single line code , if we use { } , then do { return  res.json() }
			.then((result) => {
				this.setState({
					allBooks: result,
				});
			})
			.catch(console.log);
	}

	render() {
		return (
			<div className="container">
				<button
					type="button"
					className="btn btn-primary"
					onClick={this.getAllBooks}
				>
					Get Books
				</button>
				&nbsp;
				{/* <!-- Button trigger modal --> */}
				<button
					type="button"
					className="btn btn-info"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Add Book
				</button>
				<table className="table table-straped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.allBooks.map((book) => (
							<tr key={book.id}>
								<td>{book.id}</td>
								<td>{book.title}</td>
								<td>Edit Delete</td>
							</tr>
							// console.log(book.id + " " + book.title);
						))}
					</tbody>
				</table>
				{/* <!-- Modal --> */}
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Modal title
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="title">Enter Book Name</label>
										<input
											type="text"
											name="title"
											id="title"
											className="form-control"
											value={this.state.singleBook.name}
											onChange={this.handleChange}
										/>
									</div>
								</form>
							</div>

							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.handleAddBook}
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;

/*
browser -> inspect -> source

and press Ctrl+Shift+P

and write file name books.js

it will open that file

*/

/*

depencies:

npm install react-bootstrap bootstrap --save

*/

/*

fo post request :

manage form :

manage button
 */
