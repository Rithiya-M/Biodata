import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function FormPage({ biodata, setBiodata }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBiodata(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Biodata updated successfully!');
        // In a real app, you'd save this to a database or context
    };

    return (
        <div className="page-container">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/form" className="nav-link">Form</Link></li>
                </ul>
            </nav>
            <h1 className="page-title">Form Page: Modify Biodata</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={biodata.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={biodata.age}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label className="form-label">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={biodata.address}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Update Biodata
                </button>
            </form>
        </div>
    );
}
