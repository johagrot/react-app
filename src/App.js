// import React, { useState } from "react";
// import Person from "./Components/Person/Person";
// import Toolbar from "./Components/Toolbar/Toolbar";
// import './App.css'; // Import CSS file for styling


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import Home from "./Pages/Home/Home";
import Welcome from "./Pages/Home/Welcome/Welcome";

const App = () => {

  return (
    <Router>
      <Routes>

        {/* Route for the welcome page */}
        <Route path="/" element={<Welcome />} />

        {/* Route for the login page */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for the home page */}
        <Route path="/home" element={<Home />} />

        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;




// const App = () => {
//   const [people, setPeople] = useState([]);
  
//   const handleAddPerson = () => {
//     const newPersonName = prompt("Enter the name of the person")
//     const newPersonAge = prompt('Enter the age of the person:');
//     if (newPersonName && newPersonAge) {
//       const newPerson = { name: newPersonName, age: parseInt(newPersonAge) };
//       setPeople([...people, newPerson]);
//     }
//   };

  
//   return (
//     <div className="app">
//       <Toolbar />
//       <div className="app-content">
//         <h1>Super simple React-app</h1>
//         <button className="new-button" onClick={handleAddPerson}> New </button>
//         <div className="person-container">
//           {people.map((person, index) => (
//           <Person 
//           key ={index} 
//           name={person.name} 
//           age = {person.age} />
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
