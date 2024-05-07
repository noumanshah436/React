import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const MyFunctions = () => {
  const [message, setMessage] = useState("Default message");

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

  return (
    <>
      <button onClick={() => callMyFunction()}> Call Firebase function</button>
      <div>{message}</div>
    </>
  );
};

export default MyFunctions;
