import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Home({ totalBalance }) {
  return (
    <div className="background-img d-flex justify-content-center align-items-center">
      <div className="container over-container">
        <h1 className="page-title">Bank of React</h1>
        <AccountBalance totalBalance={totalBalance} />

        <div className="buttons-container">
          <button className="btn btn-dark shadow-none first-button">
            <Link to="/debits" className=" text-decoration-none whitesmoke">
              View Your Debits
            </Link>
          </button>
          <button className="btn btn-dark shadow-none">
            <Link to="/credits" className=" text-decoration-none whitesmoke">
              View Your Credits
            </Link>
          </button>
        </div>
        <button className="btn btn-info shadow-none mb-4">
          <Link
            to="/userProfile"
            className="text-decoration-none button-text-dark"
          >
            Your Profile
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
