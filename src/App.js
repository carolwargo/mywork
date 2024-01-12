import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import BusinessEssentials from './views/Business/BusinessEssentials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-essentials" element={<BusinessEssentials />} />
      </Routes>
    </Router>
  );
}

export default App;
