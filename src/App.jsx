import "./App.css";
import RandomColorGenerator from "./components/02_RandomColorGenerator/randomColorGenerator.jsx";
import Accordion from "./components/01_Accordion/Accordion.jsx";
import data from "./components/01_Accordion/accordData.js";

function App() {
  return (
    <>
      {/*/!*Accordion Component*!/*/}
      <Accordion data={data} />

      {/*Random Color Generator*/}
      <RandomColorGenerator />
    </>
  );
}

export default App;
