import React, { useState } from 'react';
import './components/Header/Header.css';
import './App.css';

import { Header } from './components/Header/Header';
import Back from './components/Back/Back';
import Middle from './components/Slider/Slider';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('allmovies');
  return (
    <div>
      <Header/>
      <Back/> 
      <Middle selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <Card selectedGenre={selectedGenre} />
      <Footer/>
    </div>
  );
}

export default App;
