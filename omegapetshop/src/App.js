import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from './components/Login';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
