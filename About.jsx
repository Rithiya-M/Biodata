import React from "react";

function About({ biodata }) {
  return (
    <div>
      <h1>About Me</h1>

      <img
        src="C:\Users\rithi\Downloads\istockphoto-1195743934-1024x1024.jpg"
        alt="Profile"
        style={{ borderRadius: "50%", marginBottom: "20px" }}
      />

      <p>
        Hello, I am <strong>{biodata.name}</strong>.  
        I am <strong>{biodata.age}</strong> years old and currently live in  
        <strong> {biodata.address}</strong>.  
        You can contact me at <strong>{biodata.email}</strong>.
      </p>
    </div>
  );
}

export default About;
