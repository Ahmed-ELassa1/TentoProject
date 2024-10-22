import React from "react";
import PaymentItem from "../../components/PaymentItem/PaymentItem";
import "./paymentMethod.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from '@mui/icons-material/Email';

const PaymentMethod = () => {
  return (
    <div className="payment">
      <h2 className="tab-heading">Add a payment method</h2>
      <div className="payment-content">
        <PaymentItem
          icon={<PhoneIphoneIcon />}
          title="Bank of America"
          sub="Bank **************5421"
          stauts="Verified"
        />
        <PaymentItem
          icon={<EmailIcon />}
          title="Master Card "
          sub="Credit Card *********5478"
          stauts="Verified"
        />
        <div className="btns">
          <button>Add New Bank</button>
          <button>Add New Card</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
