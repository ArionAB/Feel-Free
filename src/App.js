import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={""} />
        <Route path="/contact" element={""} />
        <Route path="/formular" element={""} />
      </Routes>
    </div>
  );
}

export default App;
