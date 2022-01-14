import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Credits({ credits, setCredits, totalBalance, setTotalBalance }) {
  const [newCreditDesc, setNewCreditDesc] = useState([]);
  const [newCreditAmount, setNewCreditAmount] = useState(0);

  /* To add today's date to a new debit in the form */
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  today = month + "/" + day + "/" + year;

  const submitForm = (e) => {
    e.preventDefault();
    credits.push({
      id: Math.random(),
      date: today,
      description: newCreditDesc,
      amount: newCreditAmount,
    });
    let lastElement = parseFloat(credits[credits.length - 1].amount);
    let tempFloat = parseFloat(lastElement + totalBalance);
    setTotalBalance(tempFloat);
    setCredits(credits);
  };


  return (
    <div className="blue-background">
      <div className="over-small-container">
        <h1 className="page-title">Credits</h1>
        <AccountBalance totalBalance={totalBalance} />
        <div className="buttons-container">
          <button className="btn btn-dark shadow-none first-button">
            <Link to="/" className="text-decoration-none whitesmoke">
              Home Page
            </Link>
          </button>
          <button className="btn btn-dark shadow-none">
            <Link
              to="/userProfile"
              className=" text-decoration-none whitesmoke"
            >
              Your Profile
            </Link>
          </button>
        </div>
      </div>
      <div>
        <div className="container-fluid credits-container">
          <div className="row d-flex justify-content-center">
            {credits.map((e) => {
              return (
                <div className="card col-xxl-2 col-md-4 col-sm-5" key={e.id}>
                  <div className="card-body">
                    <div className="card-text">
                      <p>Date: {e.date}</p>
                      <p>Description: {e.description}</p>
                      <p>Amount: ${e.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container debits-form">
          <form onSubmit={submitForm}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Description of Credit"
              onChange={(event) => setNewCreditDesc(event.target.value)}
              required
            />
            <label htmlFor="amount" className="mt-4">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Amount of Credit ($$)"
              min={0}
              step="0.01"
              onChange={(event) => setNewCreditAmount(event.target.value)}
              required
            />
            <button
              type="submit"
              className="form-submit-button btn-dark shadow-none"
            >
              Add Credit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Credits;
