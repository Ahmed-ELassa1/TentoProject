import React from "react";
import "./privacy.css";
import PrivacyItem from "../../components/PrivacyItem/PrivacyItem";
import { Switch } from "@mui/material";

const Privacy = () => {
  return (
    <div className="privacy">
      <h2 className="tab-heading">Privacy options</h2>

      <h2 className="tab-heading">Instant sends</h2>
      <p className="privacy-txt">
        Allow other users to see that you use Tende and send you crypto
        instantly
      </p>
      <Switch/>
      <h2 className="tab-heading">Your Tende account</h2>
      <p className="privacy-p">
        You have a number of rights over your personal data. For more detailed
        information on these choices, please read our fullPrivacy Policy and
        ourCookie Policy.
      </p>
      <PrivacyItem
        title="Your Tende account"
        text="Request a copy of my personal data held by Tende."
        btnText="Request Data"
      />
      <PrivacyItem
        title="Request Deletion"
        text="Request deletion of some or all of my data."
        btnText="Request Deletion"
      />
      <PrivacyItem
        title="Request export"
        text="Request export of my data in a machine-readable form."
        btnText="Request Data Export"
      />
      <PrivacyItem
        title="Request Correction"
        text="Request to correct, modify, or complete my data."
        btnText="Request Correction"
      />
      <PrivacyItem
        title="Your Tende account"
        text="Request a copy of my personal data held by Tende."
        btnText="Request Data"
      />
      <PrivacyItem
        title="Request Restriction of Processing (EU and Japan Residents only)"
        text="Request that Tende stops processing my personal data.  "
        btnText="Request Restriction"
      />
      <PrivacyItem
        title="Manage Cookies"
        text="Manage your cookie preferences."
        btnText="Request Cookies"
      />
    </div>
  );
};

export default Privacy;
