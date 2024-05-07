import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const MyFunctions = () => {
  const [message, setMessage] = useState("Default message");

  const sayHello = async () => {
    const sayHello = httpsCallable(getFunctions(), "sayHello");
    const result = await sayHello();
    console.log(result.data);
  };
  async function callMyFunction() {
    const myFunction = httpsCallable(getFunctions(), "myFunction");
    try {
      const data = { name: "Nouman" };
      const result = await myFunction(data);
      if (result.data.success) {
        setMessage("Function called successfully");
      } else {
        setMessage("Function got error");
      }
    } catch (error) {
      console.log("Function got error", error);
    }
  }

  async function printFullName() {
    const getFullName = httpsCallable(getFunctions(), "getFullName");
    try {
      const data = { firstName: "Syed", lastName: "Nouman" };
      const result = await getFullName(data);
      console.log(result.data);
    } catch (error) {
      console.log("Function got error", error);
    }
  }

  return (
    <>
      <button onClick={() => callMyFunction()}> Call Firebase function</button>
      <div>{message}</div>

      <br />
      <button onClick={() => sayHello()}>Say Hello</button>

      <br />
      <button onClick={() => printFullName()}>print Full Name</button>
    </>
  );
};

export default MyFunctions;
