import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import axios from "axios";

function Credits({ accBalance }) {
  return (
    <div className="background-img">
      <div className="over-container">
        <h1 className="page-title">Credits</h1>
        <AccountBalance accBalance={accBalance} />
        <div className="buttons-container">
          <button className="btn btn-dark me-5 shadow-none">
            <Link to="/" className=" text-decoration-none whitesmoke">
              Home Page
            </Link>
          </button>
          <button className="btn btn-dark shadow-none">
            <Link
              to="/userProfile"
              className=" text-decoration-none whitesmoke"
            >
              Your Profile
            </Link>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Credits;
