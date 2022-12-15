import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import React, { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="*" element={<Page404 />}></Route>
              {/* path="about" 會繼承，不用 / */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
