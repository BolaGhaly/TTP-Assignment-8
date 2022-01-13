import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Credits({ setCredits, credits, totalBalance, setTotalBalance }) {
  const [newCreditDesc, setNewCreditDesc] = useState([]);
  const [newCreditAmount, setNewCreditAmount] = useState(0);

  /* To add today's date to a new debit in the form */
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const submitForm = async (e) => {
    e.preventDefault();
    credits.push({
      id: Math.random(),
      date: today,
      description: newCreditDesc,
      amount: newCreditAmount,
    });
    let lastElement = credits[credits.length - 1].amount;
    setTotalBalance(totalBalance + lastElement);
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
        <div className="container-fluid debits-container">
          <table className="container text-center mx-auto">
            {credits.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td>{e.date}</td>
                    <th>{e.description}</th>
                    <td>${e.amount}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <div className="container debits-form">
          <form onSubmit={submitForm}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Description of Debit"
              onChange={(event) => setNewCreditDesc(event.target.value)}
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
              onChange={(event) => setNewCreditAmount(event.target.value)}
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

export default Credits;
