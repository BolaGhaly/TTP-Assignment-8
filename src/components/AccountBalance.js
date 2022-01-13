import React from "react";

function AccountBalance({ totalBalance }) {
  console.log(totalBalance)
  return (
    <div className="user-text">Balance: ${Number(totalBalance).toFixed(2)}</div>
  );
}

export default AccountBalance;
