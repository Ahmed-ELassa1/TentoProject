import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserImg from "../../assets/user.png";
import { NotifData } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpened && ref.current && !ref.current.contains(e.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  }, [isOpened]);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="container">
          <div className="header-left">
            <div className="search-input">
              <input type="text" placeholder="Search Here" />
            </div>
            <SearchIcon />
          </div>
          <div className="header-right">
            <div
              className="notification-icon"
              onClick={() => setIsOpened(!isOpened)}
            >
              <NotificationsIcon
                className="not-icon"
                sx={{
                  "&:hover": {
                    color: "#346aa9",
                  },
                }}
              />
              {isOpened && (
                <div className="notify-container" ref={ref}>
                  <h2 className="announcements">Announcements</h2>
                  {NotifData.map((item, index) => {
                    return (
                      <div className="not-item" key={index}>
                        <div
                          className="not-icon"
                          style={{ backgroundColor: item.bgColor }}
                        >
                          <item.icon />
                        </div>
                        <div className="not-text">
                          <h4>{item.heading}</h4>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="more">
                    <Link to="/settings-profile">More</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="user-pic">
              <img src={UserImg} alt="userImage" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
