import * as React from "react";
import "./table.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Table({ caption }) {
  return (
    <table className="main-table customscroll">
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Coin Name </th>
          <th>Wallet</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ArrowDownwardIcon
              fontSize="small"
              color="error"
              style={{ marginRight: "10px" }}
            />
            Sold
          </td>
          <td>Bitcoin</td>
          <td>Using - Bank *******5264</td>
          <td>-0.000242 BTC</td>
          <td>-0.125 USD</td>
        </tr>

        <tr>
          <td>
            <ArrowUpwardIcon
              fontSize="small"
              color="success"
              style={{ marginRight: "10px" }}
            />
            Buy
          </td>
          <td>Litecoin</td>
          <td>Using - Card *******8475</td>
          <td>-0.000242 BTC</td>
          <td>-0.125 USD</td>
        </tr>

        <tr>
          <td>
            <ArrowDownwardIcon
              fontSize="small"
              color="error"
              style={{ marginRight: "10px" }}
            />
            Sold
          </td>
          <td>Bitcoin</td>
          <td>Using - Card *******8475</td>
          <td>-0.000242 BTC</td>
          <td>-0.125 USD</td>
        </tr>

        <tr>
          <td>
            <ArrowUpwardIcon
              fontSize="small"
              color="success"
              style={{ marginRight: "10px" }}
            />
            Buy
          </td>
          <td>Litecoin</td>
          <td>Using - Card *******2321</td>
          <td>-0.000242 BTC</td>
          <td>-0.125 USD</td>
        </tr>

        <tr>
          <td>
            <ArrowDownwardIcon
              fontSize="small"
              color="error"
              style={{ marginRight: "10px" }}
            />
            Sold
          </td>
          <td>Litecoin</td>
          <td>Using - Bank *******5264</td>
          <td>-0.000242 BTC</td>
          <td>-0.125 USD</td>
        </tr>
      </tbody>
    </table>
  );
}
