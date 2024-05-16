import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details.jsx";
import Favorites from "./pages/favorites/favorites.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-600 text-lg p-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites/" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
