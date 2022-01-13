import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

import "./App.css";

function App() {
  const [accountBalance, setAccountBalance] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [memberSince, setMemberSince] = useState([]);

  useEffect(() => {
    setAccountBalance(0);
    setCurrentUser("bob_loblaw");
    setMemberSince("08/23/99");
  }, []);

  // useEffect(() => {
  //   setAccountBalance(accountBalance)
  //   console.log(accountBalance)
  // }, [accountBalance])

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
            <UserProfile
              userName={currentUser}
              memberSince={memberSince}
              accountBalance={accountBalance}
            />
          }
        />
        <Route
          exact
          path="/login"
          element={<Login currentUser={currentUser} mockLogIn={mockLogIn} />}
        />

        <Route
          exact
          path="/credits"
          element={
            <Credits userName={currentUser} accountBalance={accountBalance} />
          }
        />

        <Route
          exact
          path="/debits"
          element={
            <Debits
              userName={currentUser}
              accountBalance={accountBalance}
              setAccountBalance={setAccountBalance}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
