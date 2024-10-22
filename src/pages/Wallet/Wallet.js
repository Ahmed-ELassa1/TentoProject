import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import WalletCard from "../../components/WalletCard/WalletCard";
import "./wallet.css";
import {
  Balance,
  Deposit,
  WalletAddresses,
  Withdrawals,
} from "../../data/Data";
import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";

const Wallet = () => {
  return (
    <div className="container content">
      <div className="wallet-content">
        <WalletCard
          title="Estimated Balance"
          balance="0.000"
          balanceColor="#613CE6"
        />
        <WalletCard
          title="Available Balance"
          balance="0.000"
          balanceColor="#36B37E"
        />
        <WalletCard
          title="Pending Balance"
          balance="0.000"
          balanceColor="#FFAB00"
        />
        <WalletCard
          title="Locked Balance"
          balance="0.000"
          balanceColor="#FF5630"
        />
      </div>
      <div className="wallet-section">
        <div className="adresses">
          <CustomTable
            headers={["Coin Name", "Address"]}
            caption="Wallet Addresses"
            tableData={WalletAddresses}
          />
        </div>
        <BalanceWidget />
      </div>

      <div className="thrd-section">
        <div className="left-table">
          <CustomTable
            headers={["Asset", "Balance", "Available", "Locked", "% Gain"]}
            caption="Balance"
            tableData={Balance}
          />
        </div>
        <div className="right-table">
          <CustomTable
            headers={["ID", "Type", "Amount", "Date", "Hash", "Status"]}
            caption="Deposit"
            tableData={Deposit}
          />
        </div>
      </div>

      <div className="last-sct">
        <CustomTable
          headers={["ID", "Type", "Amount", "Fee", "Date", "Hash", "Status"]}
          caption="Withdrawals"
          tableData={Withdrawals}
        />
      </div>
    </div>
  );
};

export default Wallet;
