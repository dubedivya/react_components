import "./App.css";
import React from "react";
import ScrollToTopAndBottom from "./components/17_ScrollToTopAndBottom/index.jsx";
// import TicTacToe from "./components/14_TicTacToe/index.jsx";
// import StarRating from "./components/03_StarRating/index.jsx";
// import ImageSlider from "./components/04_ImageSlider/index.jsx";
// import Accordion from "./components/01_Accordion/Accordion.jsx";
// import RandomColorGenerator from "./components/02_RandomColorGenerator/randomColorGenerator.jsx";
// import data from "./components/01_Accordion/accordData.js";
// import LoadMoreData from "./components/05_LoadMoreData/index.jsx";
// import QRCodeGenerator from "./components/07_QRCodeGenerator/index.jsx";
// import ThemeSwitcher from "./components/08_ThemeSwitcher/index.jsx";
// import TabTest from "./components/10_CustomTabs/tabtest.jsx";
// import GithubProfileFinder from "./components/12_GithubProfileFinder/githubProfile.jsx";
// import SearchAutoComplete from "./components/13_SearchAutoComplete/index.jsx";
// import ScrollIndicator from "./components/09_ScrollIndicator/index.jsx";
// import ModalTest from "./components/11_ModalPopup/modal-test.jsx";

function App() {
  return (
    <>
      {/*/!*Accordion Component/*!/*/}
      {/*<Accordion data={data} />*/}

      {/*/!*Random Color Generator*!/*!/*/}
      {/*<RandomColorGenerator />*/}

      {/*/!*Star rating Component*!/*!/*/}
      {/*<StarRating numberOfStars={10} />*/}

      {/*/!* Image Slider component*!/*/}
      {/*<ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" />*/}

      {/*/!*Load More Component*!/*/}
      {/*<LoadMoreData />*/}

      {/*/!*Nested Menu UI/ recursive menu UI / Tree view menu*!/*/}
      {/*/!*<NestedMenu menu={menus} />*!/*/}

      {/*/!*QR CODE Generator*!/*/}
      {/*<QRCodeGenerator />*/}

      {/*/!*Theme Switcher*!/*/}
      {/*<ThemeSwitcher />*/}

      {/*/!*Scroll Indicator*!/*/}
      {/*<ScrollIndicator url="https://dummyjson.com/products?limit=100" />*/}

      {/*/!*Tabs*!/*/}
      {/*<TabTest />*/}

      {/*/!*Modal PopUp*!/*/}
      {/*<ModalTest />*/}

      {/*/!*Github Profile finder  *!/*/}
      {/*<GithubProfileFinder />*/}

      {/*/!*Search Auto Complete*!/*/}
      {/*<SearchAutoComplete />*/}

      {/*/!*Tic tac toe game*!/*/}
      {/*<TicTacToe />*/}

      {/*Feature Flags Component*/}
      {/*<FeatureFlagsGlobalState>*/}
      {/*  <FeatureFlags />*/}
      {/*</FeatureFlagsGlobalState>*/}

      {/*Custom Hooks*/}
      {/*<UseFetchHookTest />*/}
      {/*<UseOnClickOutsideTest />*/}
      {/*<UseWindowResizeTest />*/}

      {/*Scroll to top and bottom*/}
      <ScrollToTopAndBottom />
    </>
  );
}

export default App;
