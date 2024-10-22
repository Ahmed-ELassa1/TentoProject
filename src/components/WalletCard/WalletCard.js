import React from "react";
import "./walletCard.css";

const WalletCard = ({ title, balance, balanceColor }) => {
  return (
    <div className="wallet-card">
        <h2>{title}</h2>
        <h3 style={{color: balanceColor}}>{balance} USD</h3>
        <span>= 0.000000 BTC</span>
    </div>
  );
};

export default WalletCard;
