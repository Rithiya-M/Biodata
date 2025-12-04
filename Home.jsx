import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Home({ biodata, setBiodata }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBiodata(prev => ({
            ...prev,
            [name]: value
        }));
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
            <h1 className="page-title">Homepage: Biodata</h1>
            <table className="biodata-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(biodata).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ textTransform: 'capitalize' }}>{key}</td>
                            <td>{value}</td>
                            <td>
                                <input
                                    type={key === 'age' ? 'number' : 'text'}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '5px' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
