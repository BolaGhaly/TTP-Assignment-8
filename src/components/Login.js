import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login({ currentUser, mockLogIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const updatedUser = currentUser;
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    setUsername(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mockLogIn(currentUser);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/userProfile" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
