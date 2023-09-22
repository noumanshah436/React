import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}
const author = "Amelia Hepworth";
const Book = () => {
	const title = "I Love You to the Moon and Back";
	console.log(title);
	//  we can also pass url in {}  using var 
	
	return (
		<article className="book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
				alt=""
			/>

			{/* setting up javascript in JSX (making dynamic JSX)  */}
			{/* add javascript in {},  inside html element */}

			<h1>{title}</h1>
			<h4>{author}</h4>
			<h4>{author.toLocaleUpperCase()}</h4>

			{/* Add an expression that return some value like use variable or use math equation etc.
				Don't do like:  <p>{ let a=10}</p> */}
				
			<p>{6 + 6}</p>
			<p>{console.log(title)}</p>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));






