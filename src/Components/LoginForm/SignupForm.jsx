import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "./SignupForm.css"

const SignupForm = () => {
    
    const [firstName, setFirstName] = useState("");
    const [sirName, setSirName] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleSirNameChange = (e) => {
        setSirName(e.target.value);
    }

    const handleBirthDayChange = (e) => {
        setBirthDay(e.target.value);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newUser = {
            firstName: firstName,
            sirName: sirName,
            birthDay: birthDay,
            userName: userName,
            password: password
        };
    
        try {
            // Perform an HTTP POST request to your backend server to register the new user
            const response = await fetch('registrationRoutes.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            // Check if the registration was successful
            if (response.ok) {
                // Redirect the user to the login page or any other page as needed
                navigate('/login');
            } else {
                // Handle the case where registration failed
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <form className = "signupForm-container" onSubmit={handleSubmit}>
            <div>
                <label className="textInfo"> Firstname: </label>
                <input type = "text" value = {firstName} onChange = {handleFirstNameChange}/>
            </div>
            <div>
                <label className="textInfo"> Familyname: </label>
                <input type = "text" value = {password} onChange = {handleSirNameChange}/>
            </div>
            <div>
                <label className="textInfo"> Birthday: </label>
                <input type = "text" value = {birthDay} onChange = {handleBirthDayChange}/>
            </div>
            <div>
                <label className="textInfo"> Username: </label>
                <input type = "text" value = {userName} onChange = {handleUserNameChange}/>
            </div>
            <div>
                <label className="textInfo"> Password: </label>
                <input type = "text" value = {password} onChange = {handlePasswordChange}/>
            </div>
            <div>
                <button type= "submit"> Create account </button>
            </div>
            {/* {error && <div className="error-message">{error}</div>} Display error message */}
        </form>
    )


}

export default SignupForm