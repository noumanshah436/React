import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import logo from "./logo.svg";
import "./App.css";

let SignInForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* <div className="field">
        <div className="control">
          <label className="label">First Name</label>
          <Field
            className="input"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div> */}

      <div className="field">
        <div className="control">
          <Field
            name="firstName"
            component={renderField}
            type="text"
            label="First Name"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field
            name="lastName"
            component={renderField}
            type="text"
            label="Last Name"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email Address"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field name="age" component={renderField} type="number" label="Age" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Proficiency</label>
          <div className="select">
            <Field className="input" name="proficiency" component="select">
              <option />
              <option value="beginner">Beginner Dev</option>
              <option value="intermediate">Intermediate Dev</option>
              <option value="expert">Expert Dev</option>
            </Field>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Gender</label>
          <label className="radio">
            <Field name="gender" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label className="radio">
            <Field
              name="gender"
              component="input"
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <Field
              name="saveDetails"
              id="saveDetails"
              component="input"
              type="checkbox"
            />
            Save Details
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Message</label>
          <Field className="textarea" name="message" component="textarea" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  );
};

const validate = (val) => {
  const errors = {};
  if (!val.firstName) {
    console.log("First Name is required");
    errors.firstName = "Required";
  }
  if (!val.lastName) {
    console.log("Last Name is required");
    errors.lastName = "Required";
  }
  if (!val.email) {
    console.log("email is required");
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log("email is invalid");
    errors.email = "Invalid email address";
  }
  if (!val.age) {
    errors.age = "Required";
  } else if (isNaN(Number(val.age))) {
    errors.age = "Must be a number";
  } else if (Number(val.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};


// The renderField component takes in props of the input object, a label, the type of input and meta which is a redux-form property.
// The form will not be submitted if there are any errors.

// When the Field component renders the renderField component, it automatically passes values as props to renderField, and renderField uses them to customize the rendering of the input field

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type} />
      {/* error message will show if there are any errors when the form field has been clicked/focused on */}
      {touched &&
        ((error && <span style={{color: "red"}}>{error}</span>) ||
          (warning && <span style={{color: "yellow"}}>{warning}</span>))}
    </div>
  </div>
);

// reduxForm is a function provided by the redux-form library for connecting your form component to the Redux store.
// We made SignInForm into a redux-connected-form, using the reduxForm
// This means that our form is now hooked up to the store

// One thing to note is the config key form, it is used as an identifier and it’s used to provide a unique
//  name for the form component. If they were multiple forms, then you’d need to use separate names so as to
//  better manage their different states.

SignInForm = reduxForm({
  form: "signIn",
  validate,
})(SignInForm);

class App extends Component {
  handleSignIn = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">Contact Form</p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;
