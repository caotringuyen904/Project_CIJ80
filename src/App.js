import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import Footer from './components/footer';
import BackToTop from './components/BackToTop';

//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin/Admin';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  useEffect(() => {
    fetch('https://63f483a03f99f5855db14181.mockapi.io/api/v1/hdiehiu')
      .then(res => res.json())
      .then(products => {
        setProducts(products);
      })
  }, [])


  // func pages home
  const handleAddToCart = (product) => {
    setListCart(prev => [...prev, product])
  }

  // func pages cart
  const hanldeRemoveCart = (product) => {
    setListCart(prev => {
      return prev.filter(p => p.id !== product.id);
    })
  }

  //func pages admin  
  const handleAddProduct = (data) => {
    const tempProduct = {
      id: products.length +1,  
      productImg:
                 data.type === 'MEN' ? '../images/NamTayNgan01.jpeg'
                                     : '../images/DamNu.jpeg',
      productTitle: data.productTitle,
      productPrice: data.productPrice,
      type: data.type,
    }

    setProducts(prev => [...prev, tempProduct]);
    alert('Add product to success')
  }


  return (
    <div className="App">
      <Header cartNumber={listCart.length} />
      <Routes>
        <Route path="*" element={<Home products={products} handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart listCart={listCart} handleRemoveCart={hanldeRemoveCart} />} />
        <Route path="/cart/:productId" element={<ProductDetail  products={products} handleAddToCart={handleAddToCart} />} />
        <Route path="/admin" element={<Admin products={products} handleAddProduct={handleAddProduct} />} />

      </Routes>

      <BackToTop></BackToTop>

      <Footer />


    </div>
  );

}

export default App;
