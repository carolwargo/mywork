import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import DigitalMarketing from './views/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './views/WebDevelopment/WebDevelopment';
import BusinessEssentials from './views/Business/BusinessEssentials';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/mywork" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/business-essentials" element={<BusinessEssentials />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
