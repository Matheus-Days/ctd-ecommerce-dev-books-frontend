import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CategoryProvider } from './providers'
import { Categories } from './screens/Categories'
import { Home } from './screens/Home';
import { Products } from './screens/Products'
import { ProductsCategory } from './screens/ProductsCategory'
import './index.css'
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
    <CategoryProvider>
      <CartProvider>
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
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
          </main>
        </BrowserRouter>
      </CartProvider>
    </CategoryProvider>
  );
}

export default App;
