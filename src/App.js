import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
  let [totalBalance, setTotalBalance] = useState();
  // let [creditTotalBalance, setCreditTotalBalance] = useState(0);

  const [currentUser, setCurrentUser] = useState({
    userName: "bob_loblaw",
    memberSince: "02/18/1998",
  });
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);

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

  totalBalance = debitAccBalance + creditAccBalance;
  // creditTotalBalance = debitAccBalance + creditAccBalance;

  useEffect(() => {
    fetchDebits();
    fetchCredits();
  }, []);

  const mockLogIn = (user) => {
    const newUser = currentUser;
    newUser.userName = user.userName;
    setCurrentUser(newUser.userName);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home totalBalance={totalBalance} />} />
        <Route
          exact
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
              totalBalance={totalBalance}
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
              credits={credits}
              setCredits={setCredits}
              totalBalance={totalBalance}
              setTotalBalance={setTotalBalance}
              // setCreditTotalBalance={setCreditTotalBalance}
              // creditTotalBalance={creditTotalBalance}
            />
          }
        />

        <Route
          exact
          path="/debits"
          element={
            <Debits
              debits={debits}
              setDebits={setDebits}
              totalBalance={totalBalance}
              setTotalBalance={setTotalBalance}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
