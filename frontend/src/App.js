import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Main from './pages/Main';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path='/Main' element={<Main/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
