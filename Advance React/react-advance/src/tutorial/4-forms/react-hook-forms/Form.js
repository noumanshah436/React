import React from "react";
import { useForm } from "react-hook-form";

const ControlledInputs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handler = (data) => {
    console.log(data);
  };

  // console.log(errors);
  // console.log(watch());               // this will trigger rerender if any input change
  const firstName = watch("firstName"); //  this will trigger rerender if firstName change

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit(handler)}>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            {...register("firstName", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
          />
          <div>
            <span>{firstName}</span><br />
            <small>{errors.firstName?.message}</small>
          </div>

          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            {...register("lastName", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
          />
          <div>
            <small>{errors.lastName?.message}</small>
          </div>

          <input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "This is required",
            })}
          />
          <div>
            <small>{errors.email?.message}</small>
          </div>

          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
