import React, { useEffect, useRef, useState } from "react";
import "./customDialog.css";
import { ConfirmationDetails } from "../../data/Data";
import ClearIcon from "@mui/icons-material/Clear";

const CustomDialog = ({ isOpened, setIsOpened }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpened && ref.current && !ref.current.contains(e.target)) {
        setIsOpened(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpened]);

  const handleClick = () => {
    setIsOpened(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setIsOpened(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpened]);

  return (
    <div className="dialog">
      <div className="dialog-card" ref={ref}>
        <div className="item-config">
          <h2 style={{ borderBottom: "0" }}>Confirmation</h2>
          <ClearIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
        </div>
        <div className="config">
          {ConfirmationDetails.map((item, index) => {
            return (
              <div key={index} className="item-config">
                <span>{item.name}</span>
                <span>{item.content}</span>
              </div>
            );
          })}
          <div className="btns">
            <button className="btn" onClick={handleClick}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
