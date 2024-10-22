import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import { NormalUser } from "../../data/Data";

const Fees = () => {
  return (
    <div className="">
      <CustomTable
        headers={[
          "Tier",
          "Total Tende holding",
          "30-day Trading Volume (BTC)",
          "Maker Fee",
          "Taker Fee",
          "24h Withdrawal Limit (BTC)",
        ]}
        caption="Normal User"
        tableData={NormalUser}
        style={{
          boxShadow: "none",
        }}
      />
      <CustomTable
        headers={[
          "Tier",
          "Total Tende holding",
          "30-day Trading Volume (BTC)",
          "Maker Fee",
          "Taker Fee",
          "24h Withdrawal Limit (BTC)",
        ]}
        caption="VIP User"
        tableData={NormalUser}
      />
    </div>
  );
};

export default Fees;
