import React from 'react';
import { assets } from "../../assets/assets";
import "./WelcomeAdmin.css";

const WelcomeAdmin = () => {
    return (
        <div className="welcome-container">
            <img src={assets.greenlogo} alt="Chaskaa Logo" className="welcome-logo" />
        </div>
    );
};

export default WelcomeAdmin;