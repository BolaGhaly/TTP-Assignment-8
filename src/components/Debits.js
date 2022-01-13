import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits({ setDebits, debits, totalBalance, setTotalBalance }) {
  const [newDebitDesc, setNewDebitDesc] = useState([]);
  const [newDebitAmount, setNewDebitAmount] = useState(0);

  /* To add today's date to a new debit in the form */
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const submitForm = (e) => {
    e.preventDefault();
    debits.push({
      id: Math.random(),
      date: today,
      description: newDebitDesc,
      amount: newDebitAmount,
    });
    let lastElement = debits[debits.length - 1].amount;
    setTotalBalance(totalBalance - lastElement);
    setDebits(debits);
  };

  return (
    <div className="blue-background">
      <div className="container-fluid over-small-container">
        <h1 className="page-title">Debits</h1>
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
        <div className="container-fluid debits-container">
          <div className="row d-flex justify-content-center">
            {debits.map((e) => {
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
              placeholder="Description of Debit"
              onChange={(event) => setNewDebitDesc(event.target.value)}
            />
            <label htmlFor="amount" className="mt-4">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Amount of Debit ($$)"
              min={0}
              step="0.01"
              onChange={(event) => setNewDebitAmount(event.target.value)}
            />
            <button
              type="submit"
              className="form-submit-button btn-dark shadow-none"
            >
              Add Debit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Debits;
