import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageProduct from './components/PageProduct/PageProduct';
import IndexPage from './components/IndexPage/IndexPage';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/product" element={<PageProduct />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
