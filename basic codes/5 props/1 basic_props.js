import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
	"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

function BookList() {
	return (
		<section className="booklist">
			{/* 
			Here we are rendring the book. 
			We are pasing unique propName:"value" ( key:"value") as props. 
			All the key:"value" pairs will be passed as a props_object.
			We pass value of price in {} as javascript because redering book is jsx.
			For passing variable's value as prop we use {} */}
			
			<Book title="this is title" price={1000} />
			<Book title="this is title" price={2000} />
		</section>
	);
}
// props means properties
const Book = (props) => {
	console.log(props);
	// {  title: "this is title",  price: 1000}

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* {console.log(props)} */}

			{/* if props have no such property, we are accesing, it will show ( blank space )/(nothing) over there */}
			<p>Rs. {props.price}</p>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
