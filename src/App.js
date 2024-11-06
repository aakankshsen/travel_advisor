import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home.jsx';
import Hero from './components/hero.jsx';  // Corrected capitalization
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';

const App = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState({});

    // Fetch user’s current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    return (
        <Router>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Routes>
                {/* Route for Home */}
                <Route path="/" element={<Home />} />
                
                {/* Route for Hero component with places data */}
                <Route path="/hero" element={
                    <Hero
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        bounds={bounds}
                        setBounds={setBounds}
                    />
                } />
            </Routes>
        </Router>
    );
};

export default App;
