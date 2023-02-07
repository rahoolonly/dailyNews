import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/entertainment"
            element={<Home key={"entertainment"} category={"entertainment"} />}
          />
          <Route
            path="/business"
            element={<Home key={"business"} category={"business"} />}
          />
          <Route
            path="/sports"
            element={<Home key={"sports"} category={"sports"} />}
          />
          <Route path="/" element={<Home key={"general"} category={"general"} />} />
          <Route
            path="/health"
            element={<Home key={"health"} category={"health"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
