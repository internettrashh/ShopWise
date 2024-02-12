import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Signin from './pages/Signin';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/signin" element={<Signin/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
