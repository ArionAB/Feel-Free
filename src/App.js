import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/nav/nav";
import { Contact } from "./Pages/contact/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/despre-noi" element={""} />
        <Route path="/echipamente" element={""} />
        <Route path="/photobooth" element={""} />
        <Route path="/oferta" element={""} />
        <Route path="/" element={""} />
      </Routes>
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