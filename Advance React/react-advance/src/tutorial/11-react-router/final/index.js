import React from "react";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages  ( these are simple components that will become our pages)
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";

// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
	return (
		<BrowserRouter>
		<Navbar />
			<br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <Router>
    // 	<Navbar />

    // 	<Routes>
    // 		<Route exact path="/">
    // 			<Home />
    // 		</Route>

    // 		<Route path="/about">
    // 			<About />
    // 		</Route>

    // 		<Route path="/people">
    // 			<People />
    // 		</Route>

    // 		{/*  URL parameters */}
    // 		{/* if we go to that dynamic url , Person page will open for that specific person with that id */}
    // 		<Route path="/person/:id" children={<Person />}></Route>

    // 		<Route path="*">
    // 			<Error />
    // 		</Route>

    // 	</Routes>
    // </Router>
  );
};

export default ReactRouterSetup;

/*

in our project we will wrap our whole aplication with
<Router> </Router>

*************************************

For the react-router, if the path matches , it's going to display both components
exaples :

/ matches to all  /about , /contact

* matches to all the path

so we will exact keyword to remove that merging of files or components

*************************************

With switch component , only the first route that matches will be displayed

***************************************

If we add our component outside of the <Route> and <switch>
( but it should be inside </Router>)
then it will be displayed in each page( can be used for Navbar or footer  ).


*/
