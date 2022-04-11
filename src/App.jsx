import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./screens/Header";
import Footer from "./screens/Footer";
import ErrorPage from "./screens/ErrorPage";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <>
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </main>
      
    </>
  );
}

export default App;
