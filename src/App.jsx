import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Categories } from './screens/Categories'
import { Home } from './screens/Home';
import { Products } from './screens/Products'
import { ProductsCategory } from './screens/ProductsCategory'
import './index.css'

function App() {
  return (
    <>
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products/:category" element={<ProductsCategory />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
