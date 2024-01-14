import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import BusinessEssentials from './views/Business/BusinessEssentials';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-essentials" element={<BusinessEssentials />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
