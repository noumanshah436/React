import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase-config";
import MyFunctions from "./components/MyFunctions";
import Queries from "./components/Queries";
import CRUD from "./components/CRUD/CRUD";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    // onAuthStateChanged takes two arguments: auth and the anonymous function callback
    // This anonymous callback function will be triggered anytime the user authentication state changes.
    // If the user is logged in, the callback function will be triggered and we can access the logged-in user data from the parameter user object.

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // user will be null
        setUser("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/queries" element={<Queries />} />
          <Route path="/my_functions" element={<MyFunctions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/crud" element={<CRUD />} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
