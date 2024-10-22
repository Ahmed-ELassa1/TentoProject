import React from "react";
import "./home.css";
import UserImg from "../../assets/user.png";
import AreaChart from "../../components/AreaChart/AreaChart";
import TradeCard from "../../components/TradeCard/TradeCard";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import Curr from "../../assets/curr.png";
import Either from "../../assets/cure.png";
import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";
import { AnalyticsDetail, BalancesData, Marks } from "../../data/Data";

const Home = () => {
  return (
    <div className="content container">
      <div className="title">
        <h2>
          Welcome Back, <span>Ahmed!</span>
        </h2>
      </div>
      <div className="home-content">
        <div className="home-left">
          <img src={UserImg} alt="userIamge" />
          <h3>Hi, Ahmed!</h3>
          <p>
            Looks like you are not verified yet. Verify yourself to use the full
            potential of Tende.
          </p>
          <div className="marks">
            {Marks.map((item, index) => {
              return (
                <div key={index} className="mark-item">
                  <div className="check-icon">
                    <item.icon
                      style={{ color: item.iconColor, fontSize: "16px" }}
                    />
                  </div>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-center">
          <h2>Analytics</h2>
          <div className="analytics-detail">
            {AnalyticsDetail.map((item, index) => {
              return (
                <div key={index} className="analytics-item">
                  <p>{item.title}</p>
                  <span>{item.to}</span>
                  <span>{item.from}</span>
                </div>
              );
            })}
          </div>
          <AreaChart />
        </div>
        <div className="home-right">
          <div className="balances">
            <h2>Trade Balances</h2>
            <div className="balance-content customscroll">
              <div className="balance-item">
                <h3>Trade Balance</h3>
                <div className="right-balance">
                  <span>$0.00</span>
                  <p>Total margin currency balance</p>
                </div>
              </div>

              {BalancesData.map((item, index) => {
                return (
                  <div key={index} className="balance-item">
                    <h3>{item.title}</h3>
                    <div className="right-balance">
                      <span>{item.value}</span>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="scnd-content">
        <TradeCard
          title="Quick Trade"
          stHeaing="You Send"
          scdHeading="You Get"
          btnHeading="Exhange Now"
          colorBg="#346aa9"
        />

        <BalanceWidget />

        <div className="balanace-cards">
          <BalanceCard title="Bitcoin" img={Curr} />
          <BalanceCard title="Ethereum" img={Either} />
          <BalanceCard title="Tether" img={Curr} />
        </div>
      </div>
    </div>
  );
};

export default Home;
