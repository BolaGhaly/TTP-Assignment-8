import React from "react";
import { Link } from "react-router-dom";

function UserProfile({ userName, memberSince }) {
  return (
    <div>
      <h1>User Profile</h1>

      <div>Username: {userName}</div>
      <div>Member Since: {memberSince}</div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
    </div>
  );
}

export default UserProfile;
