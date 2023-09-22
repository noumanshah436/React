import React from "react";
import "./App.css";
import { Container, Navbar } from "react-bootstrap";
// import Counter from "./components/Counter";
// import Register from "./components/Register";
import UserList from "./components/UserList";
import BlogApp from "./components/BlogApp";


let App = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <BlogApp/>  */}

      {/* <Counter /> */}
      {/* <Register /> */}
      <UserList />
    </>
  );
};

export default App;
