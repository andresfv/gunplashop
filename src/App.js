import logo from './logo.png';
import './App.css';
import Home from './pages/Home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
