import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "./Form.css"

const genderOptions = [
  {
    text: "Male",
    value: "Male",
  },
  {
    text: "Female",
    value: "Female",
  },
  {
    text: "Other",
    value: "Other",
  },
];

const TextField = (props) => {
  const { meta = {} } = props;
  const inputProps = {
    type: props.type || "text",
    className: props.className,
    name: props.input.name,
    id: props.input.id,
    readOnly: props.readOnly,
    autoFocus: props.autoFocus,
    autoComplete: props.autoComplete,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    value: meta.unconrolled ? undefined : props.input.value,
    onChange: props.input.onChange,
    onKeyUp: props.onKeyUp,
    onBlur: props.onBlur,
    step: props.step || "",
    min: props.min || "",
  };

  return (
    <>
      <input {...props} {...inputProps} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </>
  );
};

const Radio = (props) => {
  return (
    <div className="col">
      <>
        <input {...props.input} id={props.label} type="radio" />
        <label className="ml-2" htmlFor={props.label}>
          {props.label}
        </label>
      </>
    </div>
  );
};

const required = (value) =>
  value || typeof value === "number" ? undefined : "This field is required";

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const confirmPassword = (value, allValues) =>
  value !== allValues.password
    ? "This field must be equal to password."
    : undefined;

const SampleForm = ({ handleSubmit, form }) => {
  const submit = (values) => {
    console.log({ values });
  };

  console.log(form);
  return (
    <div className="card" style={{ width: "1100px", margin: "40px auto" }}>
      <div className="card-body">
        <Form onSubmit={handleSubmit(submit)}>
          <h3 style={{ textAlign: "center" }}>Redux Form Example</h3>
          <br />
          <div className="form_field">
            <label className="form-label"> First Name</label>
            <Field
              name="firstName"
              type="text"
              className="form-control"
              component={TextField}
              validate={[required]}
            />
          </div>
          <div className="form_field">
            <label className="form-label"> Last Name</label>
            <Field
              name="lastName"
              type="text"
              className="form-control"
              component={TextField}
            />
          </div>
          <div className="form_field">
            <label className="title">Gender</label>
            <div className="field-input form-group row">
              {genderOptions.map((element) => {
                return (
                  <React.Fragment key={element.value}>
                    <Field
                      name="gender"
                      component={Radio}
                      type="radio"
                      value={element.value}
                      label={element.text}
                      className="radio-inline"
                      validate={[required]}
                    />
                  </React.Fragment>
                );
              })}
              <div style={{ color: "red" }}>
                {form &&
                  form.SampleForm &&
                  form.SampleForm.fields &&
                  form.SampleForm.fields.gender &&
                  form.SampleForm.fields.gender.touched &&
                  form.SampleForm.syncErrors &&
                  form.SampleForm.syncErrors.gender &&
                  `${form.SampleForm.syncErrors.gender}`}
              </div>
            </div>
          </div>
          <div className="form_field">
            <label className="form-label"> Email</label>
            {/* <input name="email" type="email" className="form-control" /> */}
            <Field
              name="email"
              type="email"
              className="form-control"
              component={TextField}
              validate={[required, email]}
            />
          </div>
          <div className="form_field">
            <label className="form-label"> Password</label>
            <Field
              name="password"
              type="password"
              className="form-control"
              component={TextField}
              validate={[required]}
            />
          </div>

          <div className="form_field">
            <label className="form-label"> Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className="form-control"
              component={TextField}
              validate={[required, confirmPassword]}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default reduxForm({
  form: "SampleForm",
  enableReinitialize: true,
})(connect(mapStateToProps)(SampleForm));
