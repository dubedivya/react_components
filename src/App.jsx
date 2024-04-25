import "./App.css";
import RandomColorGenerator from "./components/02_RandomColorGenerator/randomColorGenerator.jsx";
import Accordion from "./components/01_Accordion/Accordion.jsx";
import data from "./components/01_Accordion/accordData.js";
import StarRating from "./components/03_StarRating/index.jsx";

function App() {
  return (
    <>
   {/*   Accordion Component
      <Accordion data={data} />

      Random Color Generator
      <RandomColorGenerator />*/}

        {/*Star rating Component*/}
        <StarRating numberOfStars={10}/>
    </>
  );
}

export default App;
