import React, { useState } from "react";
import Person from "./Components/Person/Person";
import Toolbar from "./Components/Toolbar/Toolbar";
import './App.css'; // Import CSS file for styling


const App = () => {
  const [people, setPeople] = useState([]);
  
  const handleAddPerson = () => {
    const newPersonName = prompt("Enter the name of the person")
    const newPersonAge = prompt('Enter the age of the person:');
    if (newPersonName && newPersonAge) {
      const newPerson = { name: newPersonName, age: parseInt(newPersonAge) };
      setPeople([...people, newPerson]);
    }
  };

  
  return (
    <div className="app">
      <Toolbar />
      <div className="app-content">
        <h1>Super simple React-app</h1>
        <button className="new-button" onClick={handleAddPerson}> New </button>
        <div className="person-container">
          {people.map((person, index) => (
          <Person 
          key ={index} 
          name={person.name} 
          age = {person.age} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
