import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  // const [accBalance, setAccBalance] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [memberSince, setMemberSince] = useState([]);
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    // setAccBalance(0);
    setCurrentUser("bob_loblaw");
    setMemberSince("08/23/99");
    fetchDebits();
    fetchCredits();
  }, []);

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

  let tempTotalBalance = debitAccBalance + creditAccBalance;

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
              userName={currentUser}
              memberSince={memberSince}
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
              userName={currentUser}
              accBalance={tempTotalBalance}
              credits={credits}
            />
          }
        />

        <Route
          exact
          path="/debits"
          element={<Debits accBalance={tempTotalBalance} debits={debits} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
