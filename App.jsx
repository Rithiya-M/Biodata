import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FormPage from "./FormPage";

function App() {
  const [biodata, setBiodata] = useState({
    name: "Rithiya",
    age: 20,
    address: "Madurai",
    Degree: "B.tech",
    Dept: "IT",
    Year: "3rd Year",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home biodata={biodata} setBiodata={setBiodata} />} />
        <Route path="/about" element={<About biodata={biodata} />} />
        <Route path="/form" element={<FormPage biodata={biodata} setBiodata={setBiodata} />} />
      </Routes>
    </Router>
  );
}
export default App;
