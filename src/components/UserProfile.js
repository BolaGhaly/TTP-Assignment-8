import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function UserProfile({
  userName,
  memberSince,
  accountBalance,
  setAccountBalance,
}) {
  return (
    <div className="background-img">
      <div className="over-container">
        <h1 className="page-title">User Profile</h1>
        <div>Username: {userName}</div>
        <div>Member Since: {memberSince}</div>
        <AccountBalance accountBalance={accountBalance}/>
        <div className="buttons-container">
          <button className="btn btn-dark me-5 shadow-none">
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
