import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routeall from './components/Routes/Routes'; // Make sure the component is correctly named and imported
import Pages from './components/Pages/Pages';
import NotFound from './Pages/Not-found/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Follow from './Pages/Follow/Follow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/movies/:id" element={<Routeall />} />
                <Route path="/search/:query" element={<Pages />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/About-us" element={<About />} />
                <Route path="/Contact-us" element={<Contact />} />
                <Route path="/Follow-us" element={<Follow />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
