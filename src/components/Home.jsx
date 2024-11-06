import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

// Import images
import homeImage1 from '/Users/aakankshsen/Desktop/kj/Sem 5/MERN/travel_advisor/src/home1.jpg'; // Adjust the path based on your folder structure
import homeImage2 from '/Users/aakankshsen/Desktop/kj/Sem 5/MERN/travel_advisor/src/home2.avif';
import homeImage3 from '/Users/aakankshsen/Desktop/kj/Sem 5/MERN/travel_advisor/src/home3.jpg';

// Array of slides containing images and text
const slides = [
    {
        image: homeImage1,
        text: {
            small: "Discover Famous Attractions",
            large: "Explore The Best Beautiful Beaches",
        },
    },
    {
        image: homeImage2,
        text: {
            small: "Discover Famous Restaurants",
            large: "A fusion of flavors that will delight your palate",
        },
    },
    {
        image: homeImage3,
        text: {
            small: "Discover Famous Hotels",
            large: "Experience boutique luxury with personalized service and style",
        },
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/hero');
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]); // Update the effect when the current index changes

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
            <div className="hero-text">
                <p className="small-text">{slides[currentIndex].text.small}</p>
                <h1 className="large-text">{slides[currentIndex].text.large}</h1>
                <button className="navigate-button" onClick={handleNavigate}>
                    Go to Maps
                </button>
            </div>
            <button className="prev-button" onClick={prevImage}>❮</button>
            <button className="next-button" onClick={nextImage}>❯</button>
        </div>
    );
};

export default Carousel;
