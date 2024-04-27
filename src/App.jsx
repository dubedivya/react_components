import "./App.css";
// import StarRating from "./components/03_StarRating/index.jsx";
import ImageSlider from "./components/04_ImageSlider/index.jsx";
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
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" />
    </>
  );
}

export default App;
