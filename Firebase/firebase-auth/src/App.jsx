import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase-config";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // onAuthStateChanged takes two arguments: auth and the anonymous function callback 
    // This anonymous callback function will be triggered anytime the user authentication state changes.
    // If the user is logged in, the callback function will be triggered and we can access the logged-in user data from the parameter user object.
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user);
      } else {
        // user will be null
        setUserName("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName.email} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
