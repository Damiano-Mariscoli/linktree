import { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <div
      className=" "
      style={{
        height: "100vh",
        background:
          "linear-gradient(to top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
