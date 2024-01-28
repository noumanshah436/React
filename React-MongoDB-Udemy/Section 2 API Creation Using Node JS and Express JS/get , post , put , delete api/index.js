const express = require("express");

const app = express(); // creating object

// bind this app
app.use(express.json());

const books = [
	{ title: "java", id: 1 },
	{ title: "python", id: 2 },
	{ title: "Nodejs ", id: 3 },
	{ title: "python", id: 4 },
];

// get request (http://localhost:8080/ )
app.get("/", (req, resp) => {
	resp.send("Welcome Nouman");
});

// get request (http://localhost:8080/api/books)
app.get("/api/books", (req, resp) => {
	resp.send(books);
});

// get request with parameter ( http://localhost:8080/api/books/1 )
app.get("/api/books/:id", (req, resp) => {
	const book = books.find((v) => v.id === parseInt(req.params.id));
	if (!book) {
		resp.status(404).send("Book Not Found");
	}
	resp.send(book);
});

// post request
app.post("/api/books/addBook", (req, resp) => {
	const book = {
		id: books.length + 1,
		title: req.body.title,
	};
	books.push(book);
	resp.send(book);
	// console.log('Book',book);
});

// put request
app.put("/api/books/:id", (req, resp) => {
	const book = books.find((v) => v.id === parseInt(req.params.id));
	if (!book) {
		resp.status(404).send("Book Not Found");
	}
	book.title = req.body.title;
	resp.send(book);
});

// delete request
app.delete("/api/books/:id", (req, resp) => {
	const book = books.find((v) => v.id === parseInt(req.params.id));
	if (!book) resp.status(404).send("Book Not Found");
	const index = books.indexOf(book);
	books.splice(index, 1);
	resp.send(book);
});

// bind to actual server ( we can run to any available port )
app.listen(8080);

// run app using given command
// nodemon index.js

//  API Creation Using NodeJS and Express JS
// http://localhost:8080/    //  go here to see response
// http://localhost:8080/api/books
// http://localhost:8080/api/books/1
