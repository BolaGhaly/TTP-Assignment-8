import React from "react";

function AccountBalance({ totalBalance }) {
  return <div className="balance-text">Balance: ${Number(totalBalance).toFixed(2)}</div>;
}

export default AccountBalance;
