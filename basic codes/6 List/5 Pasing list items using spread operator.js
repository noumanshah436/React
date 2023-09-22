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
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // using spread operator , spread out all the properties of book here
        return <Book key={book.id} {...book}></Book>;

        /*
				the above return is same as we are sending each attribute of obj separately:
				return (
					<Book
						key={book.id}
						id={book.id}
						img={book.img}
						title={book.title}
						author={book.author}
					></Book>

					*******and it simplified automatically as  : ********

					<Book
						key={book.id}
						id: 1,
						img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
						title: "I Love You to the Moon and Back",
						author: "Amelia Hepworth",
					></Book>

				);
			    */

        // console.log({ ...book });
        // {id: 1, img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
        //  title: "I Love You to the Moon and Back", author: "Amelia Hepworth"}
      })}
    </section>
  );
}

const Book = (props) => {
  //  we can access like props.img , props.title
  const { img, title, author } = props;

  // console.log(props);
  // {id: 1, img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  //  title: "I Love You to the Moon and Back", author: "Amelia Hepworth"}

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// another way to access

// const Book = ({ img, title, author }) => {
// 	return (
// 		<article className="book">
// 			<img src={img} alt="" />
// 			<h1>{title}</h1>
// 			<h4>{author}</h4>
// 		</article>
// 	);
// };

ReactDom.render(<BookList />, document.getElementById("root"));

//  end  end end  **************************

/*

understanding spread operator:

	book ={

		img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen",
	}

	console.log("Book =", book);
	let { img, title, author } = { ...book };
	console.log(img, title, author);

*/
