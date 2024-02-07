import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import Test from './views/Test/Test';
import DigitalMarketing from './views/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './views/WebDevelopment/WebDevelopment';
import BusinessEssentials from './views/Business/BusinessEssentials';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <BrowserRouter basename="/mywork" >
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/business-essentials" element={<BusinessEssentials />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
