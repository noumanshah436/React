import React from "react";
import ReactDOM from "react-dom/client";

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
	return (
		<section className="booklist">
			{books.map((book, index) => {
				// using spread operator , spread out all the properties of book here
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

const Book = ({ img, title, author }) => {
	// attribute , eventHandler
	// onClick , onMouseOver

	const displayAuthor = (author) => {
		console.log(author);
	};

	const clickHandler = (e) => {
		// we can access event object in event handler
		console.log(e);
		console.log(e.target);
	};

	return (
    <article
      className="book"
      // onMouseOver={() => {
      //   console.log(title);
      // }}
    >
      <img src={img} alt="" />
      <h1 onClick={clickHandler}> {title} </h1>
      <h4>{author}</h4>
      <br />

      {/* this will invoke displayAuthor function automaticaly just afetr rendering Book component
			 		beause we have invoked it directly with () */}
      <button type="button" onClick={displayAuthor(author)}>
        Show Author instantly
      </button>

      {/* this will call arrow function when we click button */}
      <button type="button" onClick={() => displayAuthor(author)}>
        Show Author onClick
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
