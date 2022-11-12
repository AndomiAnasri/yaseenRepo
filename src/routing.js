import React from "react";
import { Route, Routes } from "react-router";
import Report from "./report";
import Home from "./home";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default Routing;
