import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import axios from "axios";

import "./App.css";

function App() {
  let [debitAccBalance, setDebitAccBalance] = useState(0);
  let [creditAccBalance, setCreditAccBalance] = useState(0);
  let [tempTotalBalance, setTempTotalBalance] = useState(0);
  const [currentUser, setCurrentUser] = useState({
    userName: "bob_loblaw",
    memberSince: "02/18/1998",
  });
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchDebits();
    fetchCredits();
  }, []);

  // useEffect(() => {
  //   setDebits(debits);
  //   console.log("AFTER!!!");
  // }, [debits]);

  const fetchDebits = async () => {
    const response = await axios("https://moj-api.herokuapp.com/debits");
    setDebits(response.data);
  };

  const fetchCredits = async () => {
    const response = await axios("https://moj-api.herokuapp.com/credits");
    setCredits(response.data);
  };

  debits.map((e) => {
    debitAccBalance -= e.amount;
    // console.log(e);
    //console.log(debitAccBalance);
  });

  credits.map((e) => {
    creditAccBalance += e.amount;
  });

  tempTotalBalance = debitAccBalance + creditAccBalance;

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
          element={<Home accBalance={tempTotalBalance} />}
        />
        <Route
          exact
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
              accBalance={tempTotalBalance}
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
            <Credits
              userName={currentUser.userName}
              accBalance={tempTotalBalance}
              credits={credits}
            />
          }
        />

        <Route
          exact
          path="/debits"
          element={
            <Debits
              accBalance={tempTotalBalance}
              debits={debits}
              setDebits={setDebits}
              tempTotalBalance={tempTotalBalance}
              setTempTotalBalance={setTempTotalBalance}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
