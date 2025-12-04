import React, { useState } from 'react';

export default function Biodata() {
    const [biodata, setBiodata] = useState({
        name: "Rithiya",
        age: 20,
        address: "Madurai",
        Degree: "B.tech",
        Dept: "IT",
        Year: "3rd Year",
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBiodata(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <nav style={{ backgroundColor: 'white', padding: '10px', marginBottom: '20px' }}>
                <h2>Navigation Bar</h2>
                <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">form</a></li>
                </ul>
            </nav>
            <h1>Page 1: Biodata</h1>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
                <h2>Personal Information</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Name:</strong></label>
                    <input
                        type="text"
                        name="name"
                        value={biodata.name}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Age:</strong></label>
                    <input
                        type="number"
                        name="age"
                        value={biodata.age}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Address:</strong></label>
                    <input
                        type="text"
                        name="address"
                        value={biodata.address}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Degree:</strong></label>
                    <input
                        type="text"
                        name="Degree"
                        value={biodata.Degree}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Department:</strong></label>
                    <input
                        type="text"
                        name="Dept"
                        value={biodata.Dept}
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label><strong>Year:</strong></label>
                    <input
                        type="text"
                        name="Year"
                        onChange={handleChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h2>page 2: About</h2>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img
                        src="C:\Users\rithi\Downloads\istockphoto-1195743934-1024x1024.jpg"
                        alt="Profile Picture"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
                    />
                    <div>
                        <p><strong>Name:</strong> {biodata.name}</p>
                        <p><strong>Age:</strong> {biodata.age}</p>
                        <p><strong>Degree:</strong> {biodata.Degree} in {biodata.Dept}</p>
                        <p><strong>Year:</strong> {biodata.Year}</p>
                    </div>
                </div>
            </div>
                    
        </div>
    );          
}
