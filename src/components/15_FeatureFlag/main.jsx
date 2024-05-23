import React, { useContext } from "react";
import ThemeSwitcher from "../08_ThemeSwitcher/index.jsx";
import TicTacToe from "../14_TicTacToe/index.jsx";
import RandomColorGenerator from "../02_RandomColorGenerator/randomColorGenerator.jsx";
import Accordion from "../01_Accordion/Accordion.jsx";
import NestedMenu from "../06_NestedMenu/index.jsx";
import StarRating from "../03_StarRating/index.jsx";
import { FeatureFlagsContext } from "./context/index.jsx";
import data from ".././01_Accordion/accordData.js";
import menus from "../06_NestedMenu/data.js";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showThemeSwitcher",
      component: <ThemeSwitcher />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordion",
      component: <Accordion data={data} />,
    },
    {
      key: "showNestedMenu",
      component: <NestedMenu menu={menus} />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
  ];

  function checkEnabledFlags(getCurrentkey) {
    return enabledFlags[getCurrentkey];
  }

  if (loading) return <h1>Loading data....Please wait!</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
};

export default FeatureFlags;
