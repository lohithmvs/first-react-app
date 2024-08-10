import React from "react";
import RecipeNavbar from "./RecipeNavbar";
import "./Location.css";

const LocationMap = () => {
  return (
    <>
      <RecipeNavbar />
      <div className="location-section">
        <h1>Bawarchi Restaurant</h1>
        <p>
          Plot No. 44, RTC X Rd, Beside Sandhya Theatre, <br />
          Chikkadpally, New Nallakunta, <br />
          Hyderabad, Telangana 500020
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.057568523047!2d78.48667191487095!3d17.408556088059567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99ad8f1d1f0f%3A0xc1e2f9e73b9d8d3e!2sBawarchi%20Restaurant!5e0!3m2!1sen!2sin!4v1619539593455!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Bawarchi Restaurant Location"
          ></iframe>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Bawarchi Restaurant. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LocationMap;
