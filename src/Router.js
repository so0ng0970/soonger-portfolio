import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import Produce from "./pages/Produce.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produce" element={<Produce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
