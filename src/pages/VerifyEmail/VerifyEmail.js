import React from "react";
import "./verifyEmail.css";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <section className="form-container">
      <h2>Verify your Email</h2>
      <form className="sign-form">
        <MarkEmailReadIcon
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            border: "1px solid #174b88",
            borderRadius: "50%",
            padding: "15px",
            fontSize: "76px",
            color: "#053c73",
          }}
        />
        <p className="verify">
          We sent verification email to <span>example@email.com</span>. Click
          the link inside to get started!
        </p>
        <div className="verify-links">
          <Link to="/">Go to Dashboard</Link>
          <Link to="/signup">Email didn't arrive?</Link>
        </div>
      </form>
    </section>
  );
};

export default VerifyEmail;
