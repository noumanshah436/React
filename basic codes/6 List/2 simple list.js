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
];

function BookList() {
	// we cannot render objects directl.
	return (
		<section className="booklist">

			{books.map((book) => {
				const { img, title, author } = book;
				return (
					<div>
						<img src={img} alt="" />
						<h3>{title}</h3>
						<br />
						<h6>{author}</h6>
					</div>
				);
			})}
		</section>
	);
}


ReactDom.render(<BookList />, document.getElementById("root"));
