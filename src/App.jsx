import "./App.css";
import TabTest from "./components/10_CustomTabs/tabtest.jsx";
// import StarRating from "./components/03_StarRating/tabs.jsx";
//import ImageSlider from "./components/04_ImageSlider/tabs.jsx";
// import Accordion from "./components/01_Accordion/Accordion.jsx";
// import RandomColorGenerator from "./components/02_RandomColorGenerator/randomColorGenerator.jsx";
// import data from "./components/01_Accordion/accordData.js";

function App() {
  return (
    <>
      {/*/!*Accordion Component*!/*/}
      {/*<Accordion data={data} />*/}

      {/*/!*Random Color Generator*!/*/}
      {/*<RandomColorGenerator />*/}

      {/*/!*Star rating Component*!/*/}
      {/*<StarRating numberOfStars={10} />*/}

      {/* Image Slider component*/}
      {/*<ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" />*/}

      {/*Load More Component*/}
      {/*<LoadMoreData />*/}

      {/*Nested Menu UI/ recursive menu UI / Tree view menu*/}
      {/*<NestedMenu menu={menus} />*/}

      {/*QR CODE Generator*/}
      {/*<QRCodeGenerator />*/}

      {/*Theme Switcher*/}
      {/*<ThemeSwitcher />*/}

      {/*Scroll Indicator*/}
      {/*<ScrollIndicator url="https://dummyjson.com/products?limit=100" />*/}

      {/*Tabs*/}
      <TabTest />
    </>
  );
}

export default App;
