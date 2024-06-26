import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routeall from './components/Routes/Routes';// Make sure the component is correctly named
import Pages from './components/Pages/Pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/movies/:id" element={<Routeall />} />
          <Route path="/search/:query" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
