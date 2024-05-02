import React from "react";
import Tabs from "./tabs.jsx";
import "./style.css";

const TabTest = () => {
  const Random = () => {
    return <h2>This is showing function component</h2>;
  };
  const tabs = [
    {
      label: "Tab 1",
      content: "This is tab 1 content",
    },
    {
      label: "Tab 2",
      content: "This is tab 2 content",
    },
    {
      label: "Tab 3",
      content: "This is tab 3 content",
    },
    {
      label: "Tab 4",
      content: <Random />,
    },
  ];

  const handleTabChange = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };
  return <Tabs tabsContent={tabs} onChange={handleTabChange} />;
};

export default TabTest;
