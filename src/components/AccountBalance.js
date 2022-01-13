import React, { useState, useEffect } from "react";

function AccountBalance({ accBalance }) {
  return <div>Balance: ${Number(accBalance).toFixed(2)}</div>;
}

export default AccountBalance;
