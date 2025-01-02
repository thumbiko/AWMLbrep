import React from "react";
import Header from "./Header";  // Import the Header component
import city from "./Assets/city.jpeg";
import "./Home.css"; // Import your Home CSS for styles

const Home = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <img src={city} className="city-img" alt="City View" />
      <div className="overlay-text">
        <h1>Find Your Next Property</h1>
        <button className="home-button">See All Properties</button>
      </div>
    </div>
  );
};

export default Home;
