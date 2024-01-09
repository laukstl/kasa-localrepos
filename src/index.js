import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.scss';

import Home from './pages/home';
import About from './pages/about';
import Logement from './pages/logement';

import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
