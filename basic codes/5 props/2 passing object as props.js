import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
var obj = {
	id: 1,
	name: "Nouman",
};
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
	"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

function BookList() {
	return (
		<section className="booklist">
			<Book title="this is title" obj={obj} price={1000} />
		</section>
	);
}
// props means properties
const Book = (props) => {
	console.log(props);
	//  {title: "this is title", obj: {id: 1, name: 'Nouman'}, price: 1000}

	console.log("obj", props.obj);

	let { id, name } = props.obj;
	console.log("id :", id);
	console.log("name", name);

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			<p>Rs. {props.price}</p>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
