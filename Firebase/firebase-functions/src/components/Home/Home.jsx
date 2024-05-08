import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

import PropTypes from "prop-types"; // Import PropTypes

const logout = async () => {
  await signOut(auth);
};

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />
      <button onClick={logout}> Sign Out </button>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

// Define prop types for InputControl
Home.propTypes = {
  name: PropTypes.string, // label should be a string
};

export default Home;
