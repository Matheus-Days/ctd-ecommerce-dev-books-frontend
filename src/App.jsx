import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CategoryProvider } from './providers'
import { Categories } from './screens/Categories'
import { Home } from './screens/Home';
import { Products } from './screens/Products'
import { ProductsCategory } from './screens/ProductsCategory'
import './index.css'
import './App.css';
import { Cart } from './screens/Cart';
// import { Home } from './screens/Home';

import Header from "./screens/Header";
import Footer from "./screens/Footer";
import ErrorPage from "./screens/ErrorPage";
import AboutUs from "./screens/AboutUs";

const mockCart = [
  {
    id: 1,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 1,
  },
  {
    id: 2,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 3,
  },
  {
    id: 3,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 2,
  },
  {
    id: 4,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 1,
  },
  {
    id: 5,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 3,
  },
  {
    id: 6,
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 2,
  },
];

export const CartContext = createContext({cart: [], setCart: () => {}});

function App() {
  const [cart, setCart] = useState(mockCart);
  const value = { cart: cart, setCart };

  return (
    <CategoryProvider>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products/:categoryId" element={<ProductsCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
          </main>
        </BrowserRouter>
      </CartContext.Provider>
    </CategoryProvider>
  );
}

export default App;
