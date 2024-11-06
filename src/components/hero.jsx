import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { getPlacesData } from '../api';
import List from './List/List';
import Map from './Map/Map';

const Hero = ({ coordinates, setCoordinates, bounds, setBounds }) => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // Filter places based on selected rating
    useEffect(() => {
        setFilteredPlaces(places.filter((place) => place.rating > rating));
    }, [rating, places]);

    // Fetch places data when bounds or type changes
    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data ? data : []);  // Add null check for data
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch places data:", error);
                    setIsLoading(false);
                });
        }
    }, [type, bounds]);

    return (
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
                <List
                    places={filteredPlaces.length ? filteredPlaces : places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
    );
};

export default Hero;
