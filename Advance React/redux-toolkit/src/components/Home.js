import React from 'react'
import image from "../assets/redux.png";

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center mt-5">
            <img src={image} className="w-75 h-60 img img-fluid" alt="" />
            <p className="h3 display-3">
              Crash Course <span className="fw-bold">2022</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home
