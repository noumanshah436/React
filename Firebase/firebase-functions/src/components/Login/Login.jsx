import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      console.log(user);
      setSubmitButtonDisabled(false);
      navigate("/");
    } catch (error) {
      setSubmitButtonDisabled(false);
      console.log(error.message);
    }
  };

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    login();
  };

  return (
    <>
      <div className="modal">
        <h2>Login</h2>
        <div className="login">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <p className="error">{errorMsg}</p>
        </div>
        <div>
          <button
            className="button"
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
          >
            Login
          </button>
          <br />
          No account?
          <Link to="/signup">Register instead</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
