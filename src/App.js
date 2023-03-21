import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import BackToTop from './components/BackToTop';

//pages
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  useEffect(()=>{
    fetch('https://63f483a03f99f5855db14181.mockapi.io/api/v1/hdiehiu')
    .then(res => res.json())
    .then(products =>{
      console.log('products:', products);
      setProducts(products);
    })
  },[])


    // func pages home
  const handleAddToCart=(product)=>{
    setListCart(prev => [...prev, product])
  }

  // func pages cart
  const hanldeRemoveCart=(product)=>{
    setListCart(prev => {
      return prev.filter(p=>p.id!==product.id);
    })
  }

 

  return (
    <div className="App">
      <Header cartNumber={listCart.length} />
      <Routes>
        <Route path="*" element={<Home products={products} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={<Cart listCart={listCart} handleRemoveCart={hanldeRemoveCart}/>}/>
      </Routes>


      <BackToTop></BackToTop>

      
    </div>
  );

}

export default App;
