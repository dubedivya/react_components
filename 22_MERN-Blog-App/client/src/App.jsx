import React from "react";
import Header from "./components/Header/header.jsx";
import { Route, Routes } from "react-router-dom";
import AddNewBlog from "./pages/AddNewBlog/addNewBlog.jsx";
import Home from "./pages/Home/home.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
};

export default App;
