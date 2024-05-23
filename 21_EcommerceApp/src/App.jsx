import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
