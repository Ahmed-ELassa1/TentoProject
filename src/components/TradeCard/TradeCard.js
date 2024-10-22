import React, { useState } from "react";
import TradeDialog from "../TradeDialog/TradeDialog";
import CustomDialog from "../../components/CustomDialog/CustomDialog";
import "./tradecard.css";

const TradeCard = ({ title, stHeaing, scdHeading, btnHeading, colorBg }) => {
  const [isOpened, setIsOpened] = useState(false);

  const openDialog = () => {
    setIsOpened(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="trade-card">
      <h2>{title}</h2>
      <div className="card-btn">
        <h3>{stHeaing}</h3>
        <div className="transe">
          <input type="text" defaultValue="USD" />
          <input type="text" placeholder="0.0214" />
        </div>
      </div>

      <div className="card-btn">
        <h3>{scdHeading}</h3>
        <div className="transe">
          <input type="text" defaultValue="BTC" />
          <input type="text" placeholder="0.0214" />
        </div>
      </div>

      <p>1 USD ~ 0.0088 BTC</p>
      <span>Expected Rate</span>
      <span>No Extra Fees</span>
      <button
        onClick={openDialog}
        style={{ backgroundColor: colorBg }}
        className="exchange-btn"
      >
        {btnHeading}
      </button>
      {isOpened && <CustomDialog isOpened={isOpened} setIsOpened={setIsOpened} />}
    </div>
  );
};

export default TradeCard;
