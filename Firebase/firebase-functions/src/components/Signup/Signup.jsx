import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const signUp = async () => {
    try {
      setSubmitButtonDisabled(true);
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      setSubmitButtonDisabled(false);
      navigate("/");
    } catch (error) {
      setSubmitButtonDisabled(false);
      setErrorMsg(error.message);
    }
  };

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    signUp();
  };

  return (
    <>
      <div className="modal">
        <h2>Register</h2>
        <form className="register">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
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
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p className="error">{errorMsg}</p>
        </form>
        <div>
          Got an account?{" "}
          <Link className="switch" to="/login">
            Login Instead
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
