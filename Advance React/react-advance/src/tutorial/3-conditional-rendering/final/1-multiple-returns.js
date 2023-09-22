import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

// Multiple Returns - Fetching Data

const MultipleReturns = () => {
  // useState
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  // useEffect
  useEffect(() => {
    // console.log("useEffect");

    fetch(url)
      .then((resp) => {
        console.log("get response");
        if (resp.status >= 200 && resp.status <= 299) {
          // console.log("return response");
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        // console.log("set user");
        const { login } = user; // just destructuring object
        // console.log("before setUser");
        setUser(login);
        // console.log("before setIsLoading ");
        setIsLoading(false);
        // console.log("after setIsLoading");
      })
      .catch((error) => console.log(error));
  }, []);

  // conditional rendering

  if (isLoading) {
    console.log("loading");
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    console.log("error");
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  // default render
  console.log("default render");
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;

// the catch at the end can just handle network error, it will not catch 404 error ( user not found error)
// so you need to handle it manually by checkig the status of the response

//  to catch network error we use try catch block
//  project 2 tours

// ********************
//  output if we disable strict mode:

// loading
// useEffect
// get response
// return response
// set user
// before setUser
// before setIsLoading
// after setIsLoading
// default render
