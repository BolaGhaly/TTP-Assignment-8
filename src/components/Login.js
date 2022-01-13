import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login({ currentUser, mockLogIn }) {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    mockLogIn(currentUser);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/userProfile" />;
  }

  return (
    <div className="background-img d-flex justify-content-center align-items-center">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="userName" className="mt-4">
            User Name:
          </label>
          <input
            type="text"
            name="userName"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          <label htmlFor="password" className="mt-4">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="login-button btn-dark shadow-none">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
