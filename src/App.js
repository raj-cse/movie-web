import React from 'react';
import './components/Header/Header.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Back from './components/Back/Back';
import Middle from './components/Slider/Slider';
import Card from './components/Card/Card';

import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Back/> 
      <Middle/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
