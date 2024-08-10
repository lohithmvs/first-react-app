import React from "react";
import RecipeNavbar from "./RecipeNavbar";
import "./Home.css";

const HomeScreen = () => {
  return (
    <>
      <RecipeNavbar />
      <div className="hero-section">
        <h1>Welcome to Recipe Heaven</h1>
        <p>Your ultimate destination for delicious recipes!</p>
        <a href="/recipes" className="cta-btn">
          Explore Recipes
        </a>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At Recipe Heaven, we are passionate about bringing you the best
          recipes from around the world. Whether you're a seasoned chef or just
          starting out, we have something for everyone. Join our community and
          discover new flavors today!
        </p>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Recipe Heaven. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomeScreen;
