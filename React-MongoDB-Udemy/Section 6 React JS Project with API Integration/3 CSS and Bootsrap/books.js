import React from "react";

class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allBooks: [],
		};
		// we are registring this method for this component
		this.getAllBooks = this.getAllBooks.bind(this);
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
					className="btn btn-primary btn-lg btn-block"
					onClick={this.getAllBooks}
				>
					Get Books
				</button>
				<button type="button" className="btn btn-primary btn-lg btn-block">
					Add Books
				</button>

				<table class="table table-straped">
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
