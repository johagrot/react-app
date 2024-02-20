import React, { useState } from 'react';
import './Person.css'; // Import CSS file for styling

const Person = (props) => {

  const[imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className = "person">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <input
        type = "file"
        accept= "image/*"
        onChange={handleImageChange}
        />
        {imageUrl && (
          <img src = {imageUrl} alt = "Person" title = "Profile Picture" className = 'person-image' /> 
        )}
    </div>
  );
}

export default Person;
