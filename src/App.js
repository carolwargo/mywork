import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import About from './views/About/About';
import Test from './views/Test/Test';
import DigitalMarketing from './views/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './views/WebDevelopment/WebDevelopment';
import BusinessEssentials from './views/Business/BusinessEssentials';
//import Header from './components/Header/Header';
import Blog from './views/Blog/Blog';
import PostsPageTest from './views/Blog/PostsPageTest';
import Services from './views/Services/Services';
import GraphicDesign from './views/GraphicDesign/GraphicDesign';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/business-essentials" element={<BusinessEssentials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts" element={<PostsPageTest />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
