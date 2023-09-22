import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars

const books = [
	{
		img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
		title: "I Love You to the Moon and Back",
		author: "Amelia Hepworth",
	},
	{
		img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen",
	},
	{
		img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
		title: "The Vanishing Half: A Novel",
		author: "Brit Bennett",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				// const { img, title, author } = book;
				// passing book_object as props
				return <Book book={book}></Book>;
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

// map() =  Performs a function for each 
//          element in an array, then stores
//          the returned values in a new array
//          and return that array.
 

let storeUSD = [5, 6, 7, 8, 9];

function toEuros(value){

    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);

console.log(storeUSD);
console.log(storeEUR);


output:

[ 5, 6, 7, 8, 9 ]
[ 4.25, 5.1, 5.95, 6.8, 7.6499999999999995 ]

*/
