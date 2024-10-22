import React from "react";
import PersonalUser from "../../components/PersonalUser/PersonalUser";
import UserDetails from "../../components/UserDetails/UserDetails";
import "./userProfile.css";

const UserProfile = () => {
  return (
    <div>
      <h2 className="tab-heading">User Profile</h2>
      <div className="user-content">
        <UserDetails/>
        <PersonalUser />
      </div>
    </div>
  );
};

export default UserProfile;
