import React, { useState } from "react";
import "./profile.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Fees from "../Fees/Fees";
import PaymentMethod from "../Payment/PaymentMethod";
import Security from "../Security/Security";
import Activity from "../Activity/Activity";
import Privacy from "../Privacy/Privacy";
import UserProfile from "../UserProfile/UserProfile";
import API from "../API/API";
import { makeStyles } from "@mui/material";

const Profile = () => {
  const [value, setValue] = useState("Profile");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container content profile">
      <h2 className="breadcrumb">
        <span>Settings /</span> {value}
      </h2>
      <div className="profile-container">
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                  },
                }}
              >
                <Tab label="Profile" value="Profile" />
                <Tab label="Security" value="Security" />
                <Tab label="Activity" value="Activity" />
                <Tab label="Privacy" value="Privacy" />
                <Tab label="Payment Method" value="Payment Method" />
                <Tab label="API" value="API" />
                <Tab label="Fees" value="Fees" />
              </TabList>
            </Box>
            <TabPanel value="Profile">
              <UserProfile />
            </TabPanel>
            <TabPanel value="Security">
              <Security />
            </TabPanel>
            <TabPanel value="Activity">
              <Activity />
            </TabPanel>
            <TabPanel value="Privacy">
              <Privacy />
            </TabPanel>
            <TabPanel value="Payment Method">
              <PaymentMethod />
            </TabPanel>
            <TabPanel value="API">
              <API />
            </TabPanel>
            <TabPanel style={{ padding: "0" }} value="Fees">
              <Fees />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
