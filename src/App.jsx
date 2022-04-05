import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
