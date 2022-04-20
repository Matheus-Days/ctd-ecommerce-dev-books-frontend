import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cart } from './screens/Cart';
import { Admin } from "./screens/Admin";
import ErrorPage from "./screens/ErrorPage";
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from "./screens/AboutUs";
import { CartProvider } from './components/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
