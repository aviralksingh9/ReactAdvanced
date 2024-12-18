import React from "react";
import "./Tabs.css";

const TabPanel = ({ title, isActive, onClick }) => {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default TabPanel;
