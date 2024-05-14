import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import "./home.css"


const logout = async () => {
  await signOut(auth);
};

function Home(props) {
  const { user } = props;
  const [requestTutorial, setRequestTutorial] = useState(false);
  const [tutorial, setTutorial] = useState("");
  const [requestError, setRequestError] = useState("");

  const addTutorialRequest = async () => {
    // getting error on this request from addRequest in `callableFunctions.js`
    const addRequest = httpsCallable(getFunctions(), "addRequest");
    try {
      const data = {
        text: tutorial,
      };
      debugger;
      const result = await addRequest(data);
      console.log("result");
      console.log(result);
    } catch (error) {
      debugger;
      setRequestError(error.message);
      console.log("Function got error", error);
    }
  };

  console.log("render");
  return (
    <>
      <div>
        <header>
          <nav>
            {user ? (
              <>
                <span>{`Welcome - ${user.email} `}</span>
                <button
                  className="add-request"
                  onClick={() => setRequestTutorial(true)}
                >
                  {" "}
                  add request{" "}
                </button>
                <button className="sign-out" onClick={logout}>
                  {" "}
                  Sign Out{" "}
                </button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </nav>
        </header>
      </div>

      {requestTutorial && (
        <div className="new-request">
          <div className="modal">
            <h2>Request a Tutorial</h2>
            <input
              type="text"
              name="request"
              placeholder="Request..."
              onChange={(e) => setTutorial(e.target.value)}
            />
            <button onClick={addTutorialRequest}>Submit Request</button>
            <p className="error">{requestError}</p>
          </div>
        </div>
      )}

      <section className="content">
        <h1>Tutorial Requests</h1>
        <ul className="request-list">
          <li>
            <span className="text">Laravel 6 tutorial</span>
            <div>
              <span className="votes">125</span>
              <i className="material-icons upvote">arrow_upward</i>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

// // Define prop types for InputControl
// Home.propTypes = {
//   name: PropTypes.string, // label should be a string
// };

export default Home;
