import React from "react";

function AccountBalance({ totalBalance }) {
  console.log(typeof (totalBalance))
  console.log(totalBalance);

  return (
    <div className="user-text">Balance: ${totalBalance}</div>
  );
}

export default AccountBalance;
