import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function UserProfile({ currentUser, totalBalance }) {
  return (
    <div className="background-img d-flex justify-content-center align-items-center">
      <div className="over-container">
        <h1 className="page-title">User Profile</h1>
        <div className="user-text">Username: {currentUser.userName}</div>
        <div className="user-text">Member Since: {currentUser.memberSince}</div>
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
          <Link to="/" className="text-decoration-none button-text-dark">
            Home Page
          </Link>
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
