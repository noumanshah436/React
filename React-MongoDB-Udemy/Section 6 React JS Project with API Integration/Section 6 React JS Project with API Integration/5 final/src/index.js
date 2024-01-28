import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Books from "./books"; 

// npm install react-bootstrap bootstrap --save
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<React.StrictMode>
		<Books />
	</React.StrictMode>,
	document.getElementById("root")
);
