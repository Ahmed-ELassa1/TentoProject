import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import { AccountActivity, WebSessions } from "../../data/Data";
import "./activity.css";

const Activity = () => {
  return (
    <div className="activity">
      <h2 className="tab-heading">Third-Party Applications</h2>
      <CustomTable
        headers={["Signed In", "Browser", "IP Adress", "Near", "Current"]}
        caption="Web Sessions "
        tableData={WebSessions}
      />
      <CustomTable
        headers={["Confirmed", "Browser", "IP Adress", "Near", "Current"]}
        caption="Confirmed Sessions "
        tableData={WebSessions}
      />
      <CustomTable
        headers={["Action", "Source", "IP Adress", "Location", "When"]}
        caption="Account Activity"
        tableData={AccountActivity}
      />
      <h2 className="tab-heading">Close Account</h2>
      <p className="close-p">Withdraw funds and close your Tende account -<span>this cannot be undone</span></p>
      <button className="close-btn">Close Account</button>
    </div>
  );
};

export default Activity;
