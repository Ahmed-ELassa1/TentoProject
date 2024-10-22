import React from "react";
import "./customTable.css";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import {
  AccountActivity,
  ApiKeys,
  Balance,
  Deposit,
  NormalUser,
  WalletAddresses,
  WebSessions,
  Withdrawals,
} from "../../data/Data";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const CustomTable = ({ caption, headers, tableData }) => {
  return (
    <table className="custom-table customscroll">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th scope="col" key={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData === WalletAddresses &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>
                  <CurrencyBitcoinIcon fontSize="small" color="warning" />
                  {cell.name}
                </td>
                <td>{cell.value}</td>
              </tr>
            );
          })}

        {tableData === Balance &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>
                  <CurrencyBitcoinIcon fontSize="small" color="warning" />
                  {cell.asset}
                </td>
                <td>{cell.balance}</td>
                <td>{cell.available}</td>
                <td>{cell.locked}</td>
                <td>
                  {cell.gain}
                  <ArrowUpwardIcon fontSize="small" color="success" />
                </td>
              </tr>
            );
          })}

        {tableData === Deposit &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.id}</td>
                <td>
                  <CurrencyBitcoinIcon fontSize="small" color="warning" />
                  {cell.type}
                </td>
                <td>{cell.amount}</td>
                <td>{cell.date}</td>
                <td>{cell.hash}</td>
                <td>{cell.status}</td>
              </tr>
            );
          })}

        {tableData === Withdrawals &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.id}</td>
                <td>
                  <CurrencyBitcoinIcon fontSize="small" color="warning" />
                  {cell.type}
                </td>
                <td>{cell.amount}</td>
                <td>{cell.fee}</td>
                <td>{cell.date}</td>
                <td>{cell.hash}</td>
                <td>{cell.status}</td>
              </tr>
            );
          })}

        {tableData === NormalUser &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.level}</td>
                <td>{cell.total}</td>
                <td>{cell.volume}</td>
                <td>{cell.fee}</td>
                <td>{cell.taker}</td>
                <td>{cell.limit}</td>
              </tr>
            );
          })}

        {tableData === WebSessions &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.signed}</td>
                <td>{cell.browser}</td>
                <td>{cell.ip}</td>
                <td>{cell.near}</td>
                <td>
                  <span>
                    <cell.correct />
                  </span>
                  <span>
                    <cell.fault />
                  </span>
                </td>
              </tr>
            );
          })}

        {tableData === AccountActivity &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.action}</td>
                <td>{cell.source}</td>
                <td>{cell.ip}</td>
                <td>{cell.location}</td>
                <td>{cell.duration}</td>
              </tr>
            );
          })}

        {tableData === ApiKeys &&
          tableData.map((cell, index) => {
            return (
              <tr key={index}>
                <td>{cell.key}</td>
                <td>{cell.status}</td>
                <td><cell.action/></td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CustomTable;
