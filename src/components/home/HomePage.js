import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Deha Lokman SAHIN</h1>
        <p>
            React Redux Web Application
        </p>
        <Link to="about" className="btn btn-primary btn-lg">
            About
        </Link>
    </div>
);

export default HomePage;