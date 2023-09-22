import React, { useState, useEffect } from "react";

import axios from "axios";

const MyAxios = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    axios
      .get("https://instagram-clone-pk.herokuapp.com/api/v1/profile")
      .then((response) => {
        setMyData(response.data.data); // actual content from server
      })
      .catch((error) => setIsError(error.message));  // 
  }, []);

  // console.log("myData");
  console.log(myData);
  return (
    <>
      <h1>Axios Tutorial</h1>
      <br />
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((account) => {
          const { email, name } = account.attributes;
          return (
            <div key={account.id} className="card">
              <h2>{name.toUpperCase()}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyAxios;
