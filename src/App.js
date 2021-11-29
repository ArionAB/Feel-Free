import React from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components/nav";
import { Contact } from "./Pages/contact/contact";

import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/footer";
import Scenotehnica from "./Pages/scenotehnica";
import Sonorizare from "./Pages/sonorizare";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/despre-noi" element={""} />
        <Route path="/scenotehnica" element={<Scenotehnica />} />
        <Route path="/sonorizare" element={<Sonorizare />} />
        <Route path="/photobooth" element={""} />
        <Route path="/oferta" element={""} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
/* 
<Nav />
      <Routes>
        <Route path="/despre-noi" element={""} />
        <Route path="/echipamente" element={""} />
        <Route path="/photobooth" element={""} />
        <Route path="/contact" element={Contact} />
        <Route path="/oferta" element={""} />
        <Route path="/" element={""} />
      </Routes> */
