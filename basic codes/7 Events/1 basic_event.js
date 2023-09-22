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
  // for event we need attribute and eventHandler
  // onClick , onMouseOver
  const clickHandler = () => {
    alert("Hello World");
  };
  return (
    <article className="book">
      <img src={img} alt="" />

      {/* inline event functionality  ---- write function in javascript */}
      <h1 onClick={() => console.log(title)}>{title}</h1>

      <h4>{author}</h4>
      <br />

      {/* event using reference  */}
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
