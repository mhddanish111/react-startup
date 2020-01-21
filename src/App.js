import React from 'react';
import './App.css';
import MenuBar from './components/common/menuBar';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Product from './components/product';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <Home />
        <Product />
        <ProductDetails />
        <AboutUs />
        <ContactUs />
      </header>
    </div>
  );
}

export default App;
