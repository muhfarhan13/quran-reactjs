import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Setting from "../pages/Setting";
import Surah from "../pages/Surah";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/info" element={<Info />} />
      <Route exact path="/setting" element={<Setting />} />
      <Route path="/surah/:identifier" element={<Surah />} />
    </Routes>
  );
};

export default index;
