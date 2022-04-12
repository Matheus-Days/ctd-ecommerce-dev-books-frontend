import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cart } from './screens/Cart';
import { Home } from './screens/Home';

const mockCart = [
  {
    id: "1",
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 1,
  },
  {
    id: "2",
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 3,
  },
  {
    id: "3",
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 2,
  },
  {
    id: "4",
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 1,
  },
  {
    id: "5",
    title: "Padrões de projeto",
    coverSrc:
      "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
    price: "70,90",
    quantity: 3,
  },
  {
    id: "6",
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
    <CartContext.Provider value={value}>
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </CartContext.Provider>
  );
}

export default App;
