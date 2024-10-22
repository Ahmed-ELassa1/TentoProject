import React from "react";
import PaymentItem from "../../components/PaymentItem/PaymentItem";
import "./security.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Security = () => {
  return (
    <div className="security">
      <h2 className="tab-heading">2-step verification</h2>
      <div className="payment-content">
        <PaymentItem
          icon={<PhoneIphoneIcon />}
          title="+xxx xxxxxxxx60 "
          sub="Keep your primary phone number up-to-date "
          stauts="Required"
        />
        <PaymentItem
          icon={<EmailIcon />}
          title="hello@example.com"
          sub="Keep your primary email up-to-date"
          stauts="Required"
        />
        <PaymentItem
          icon={<LockIcon />}
          title="*************"
          sub="You can change your password "
          stauts="Required"
        />
        <h2 className="tab-heading">Identity verification</h2>
        <PaymentItem
          icon={<BadgeIcon />}
          title="xxx xxxxx xxx40"
          sub="Social Security Number"
          stauts="Verified"
        />
        <div className="btns">
          <h2 className="tab-heading">
            Use 2-step verification to secure your transactions
          </h2>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Any amount of cryptocurrency Most secure"
              className="securityLabel"
            />
            <FormControlLabel
              control={<Switch />}
              label="Over 1.2000 BTC per day"
              className="securityLabel"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Never Least secure"
              className="securityLabel"
            />
          </FormGroup>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
