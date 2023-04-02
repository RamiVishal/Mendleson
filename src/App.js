import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/UserHome/HomePage';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
