import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "./SignupForm.jsx"

const LoginForm = ({ onSignupClick }) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Initialize error state
    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement authentication API call here
        // Replace this with your actual authentication logic
        if (userName === "admin" && password === "admin") {
            // If authentication is successful, navigate to the home page
                navigate("/home")

        } else {
            // If authentication fails, display an error message or handle it accordingly
            setError("Invalid credentials");
        }
      }


    

    return (
        <form className = "form-container" onSubmit={handleSubmit}>
            <div>
                <label className="textInfo"> Username: </label>
                <input type = "text" value = {userName} onChange = {handleUserNameChange}/>
            </div>
            <div>
                <label className="textInfo"> Password: </label>
                <input type = "text" value = {password} onChange = {handlePasswordChange}/>
            </div>
            <div>
                <button type= "submit" > Login </button>
            </div>
            <div>
                <button type = "button" onClick={onSignupClick}> Sign up </button>
            </div>
            {/* {showSignupForm && <signupForm/>} */}
            {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </form>
    )
}

export default LoginForm