import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits({
  accBalance,
  setDebits,
  debits,
  tempTotalBalance,
  setTempTotalBalance,
}) {
  const [newDebitDesc, setNewDebitDesc] = useState([]);
  const [newDebitAmount, setNewDebitAmount] = useState(0);

  /* To add today's date to a new debit in the form */
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const submitForm = async (e) => {
    e.preventDefault();
    debits.push({
      id: Math.random(),
      date: today,
      description: newDebitDesc,
      amount: newDebitAmount,
    });
    let last = debits[debits.length - 1].amount;
    setTempTotalBalance(tempTotalBalance - last);

    setDebits(debits);
    // console.log(debits.map((e) => console.log(e)));
    //debits.map((e) => console.log(e));

    //         try{    //4. send the request
    //         5. declare body
    //         const body = {track}
    //         6. fetch
    //         const response = await fetch ("http://localhost:8080/tracks", {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(body),
    //           })
    //           console.log(response)
    //         }
    //     catch(err){ //3. error catch
    //         console.error(err.message)
    //     }
    // }
  };

  // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // console.log("Today:", today);
  // console.log("Time:", time);

  return (
    <div className="blue-background">
      <div className="over-container">
        <h1 className="page-title">Debits</h1>
        <AccountBalance accBalance={accBalance} />
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
            {debits.map((e) => {
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
