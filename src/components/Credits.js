import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import axios from "axios";

function Credits({ userName,  accountBalance }) {
  const [credits, setCredits] = useState([]);

  const fetchCredits = async () => {
    const response = await axios("https://moj-api.herokuapp.com/credits");
    setCredits(response.data);
  };

  return (
    <div className="background-img">
      <div className="over-container">
        <h1 className="page-title">Credits</h1>
        <AccountBalance accountBalance={accountBalance} />
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
