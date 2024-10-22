import React from "react";
import "./paymentItem.css";

const PaymentItem = ({icon,title,sub,stauts}) => {
  return (
    <div className="payment-item">
      <div className="payment-details">
        <div className="icon">
          {icon}
        </div>
        <div className="pay">
          <p>{title}</p>
          <span>{sub}</span>
          <span className="status">{stauts}</span>
        </div>
      </div>
      <div className="submit-payment">
        <button className="manage-btn">Manage</button>
      </div>
    </div>
  );
};

export default PaymentItem;
