import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [accountBalance, setAccountBalance] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [memberSince, setMemberSince] = useState("");

  // useEffect(() => {
  //   setAccountBalance(14568.27);
  //   setCurrentUser("bob_loblaw");
  //   setMemberSince("08/23/99");
  // }, []);

  const mockLogIn = (logInInfo) => {
    const newUser = currentUser;
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home accountBalance={accountBalance} />}
        />
        <Route
          exact
          path="/userProfile"
          element={
            <UserProfile userName={currentUser} memberSince={memberSince} />
          }
        />
        <Route
          exact
          path="/login"
          element={<Login currentUser={currentUser} mockLogIn={mockLogIn}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
