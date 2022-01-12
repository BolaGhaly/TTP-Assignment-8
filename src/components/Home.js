import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Home({ accountBalance }) {
  return (
    <div>
      <img
        src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
        alt="bank"
      />
      <h1>Bank of React</h1>

      <AccountBalance accountBalance={accountBalance} />
      <button>
        <Link to="/userProfile">User Profile</Link>
      </button>
    </div>
  );
}

export default Home;
