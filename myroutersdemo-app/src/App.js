import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/Productsdetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navigation />

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </>
  );
}

export default App;
