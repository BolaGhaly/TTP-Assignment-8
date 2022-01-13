import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits({ userName, accountBalance, setAccountBalance }) {


  const submitForm = async (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   fetchDebits();
  //   setAccountBalance(accountBalance);
  // }, [boolChanged]);

  /* To add today's date to a new debit in the form */
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // console.log("Today:", today);
  // console.log("Time:", time);

  // function didBoolChanged() {
  //   setBoolChanged(true);
  // }

  return (
    <div className="blue-background">
      <div className="over-container">
        <h1 className="page-title">Debits</h1>
        <AccountBalance accountBalance={accountBalance} />
        <div className="buttons-container">
          <button className="btn btn-dark me-5 shadow-none">
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
            {/* {debits.map((e) => {
              console.log("accountBalance = ", (accountBalance -= e.amount));
              console.log("accountBalance = ", accountBalance.toFixed(2));
              return (
                <tbody key={e.id}>
                  <tr>
                    <td>{e.date}</td>
                    <th>{e.description}</th>
                    <td>{e.amount}</td>
                  </tr>
                </tbody>
              );
            })} */}
          </table>
        </div>

        <div className="container debits-form">
          <form onSubmit={submitForm}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Description of Debit"
            />
            <label htmlFor="amount" className="mt-4">
              Amount:
            </label>
            <input type="text" id="amount" placeholder="Amount of Debit ($$)" />
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
