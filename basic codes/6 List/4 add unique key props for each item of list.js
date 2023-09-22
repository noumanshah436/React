import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars

const books = [
	{
		id: 1,
		img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
		title: "I Love You to the Moon and Back",
		author: "Amelia Hepworth",
	},
	{
		id: 2,
		img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen",
	},
	{
		id: 3,
		img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
		title: "The Vanishing Half: A Novel",
		author: "Brit Bennett",
	},
];

function BookList() {
	// if you have a list in react , you need to add a  key prop with a unique value ,
	// 	for example add id attribute to each item of the list , or take index value of each item
	// Keys help React identify which items have changed, are added, or are removed.
	// Keys should be given to the elements inside the array to give the elements a stable identity:
	return (
		<section className="booklist">
			{books.map((book) => {
				// const { img, title, author } = book;
				// passing book_object as props
				return <Book key={book.id} book={book}></Book>;
			})}
		</section>
	);
}

const Book = (props) => {
	// here props is not a simple object with img, title, author
	// props is now an object with book_object
	console.log(props);
	const { img, title, author } = props.book;

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{props.children}
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
/*

Error if we do not give key={book.id} while rendering Book:

	index.js:1 Warning: Each child in a list should have a unique "key" prop.

	Check the render method of `BookList`. See https://reactjs.org/link/warning-keys for more information.
		at Book (http://localhost:3000/static/js/main.chunk.js:194:13)
		at BookList

*/
