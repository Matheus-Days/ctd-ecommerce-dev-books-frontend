import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './screens/Home';
import Header from "./screens/Header";
import Footer from "./screens/Footer";

function App() {
  return (
    <>
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </main>
      
    </>
  );
}

export default App;
