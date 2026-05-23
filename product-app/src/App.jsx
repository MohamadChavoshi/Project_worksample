import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductDetail from './features/products/ProductDetail';
import Header from './components/layout/Header';
import Footer from './components/layout/footer';
import productsData from './data/products.json';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);



  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (cart.length > 0) {
        event.preventDefault();
        event.returnValue =
          'سبد خرید شما پاک خواهد شد. آیا مطمئنید می‌خواهید صفحه را ببندید؟';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [cart]);


  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Header cart={cart} setCart={setCart} />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={productsData} addToCart={addToCart} />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail products={productsData} addToCart={addToCart} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
