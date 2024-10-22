import React from "react";
import './balanceWidget.css'
import PieChart from "../PieChart/PieChart";

const BalanceWidget = () => {
  return (
      <div className="balance">
        <h2>Balance</h2>
        <div className="balance-main">
          <div className="balance-left">
            <PieChart />
            <h4 className="heading-balance">Total Balance = $ 5360</h4>
          </div>
          <div className="balance-right">
            <div className="balance-item">
              <h3>Bitcoin</h3>
              <div className="right-balance">
                <span>0.042 BTC</span>
                <p>0.5 USD</p>
              </div>
            </div>

            <div className="balance-item">
              <h3>Tether</h3>
              <div className="right-balance">
                <span>0.42 USDT</span>
                <p>0.15 USD</p>
              </div>
            </div>

            <div className="balance-item">
              <h3>Tezho</h3>
              <div className="right-balance">
                <span>0.002 USDT</span>
                <p>0.15 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BalanceWidget;
