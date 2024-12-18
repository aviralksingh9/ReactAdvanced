import React, { useState } from "react";
import TabPanel from "./TabPanel";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Tab 1", content: "Content of Tab 1" },
    { title: "Tab 2", content: "Content of Tab 2" },
    { title: "Tab 3", content: "Content of Tab 3" },
  ];

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="tabs">
        {tabs.map((item, index) => (
          <div>
            <TabPanel
              onClick={() => handleActiveTab(index)}
              key={index}
              title={item.title}
              isActive={activeTab === index}
            />
          </div>
        ))}
      </div>

      <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        {tabs[activeTab].content}
      </div>
    </>
  );
};

export default Tabs;
