import React, { useState } from "react";
import Toolbar from "../../../Components/Toolbar/Toolbar";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import "./Welcome.css"
import SignupForm from "../../../Components/LoginForm/SignupForm";

const Welcome = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault(); // Prevent the default behavior of the anchor element
        setShowLoginForm(prevState => !prevState);
        setShowSignupForm(false)

    };

    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleSignupClick = (e) => {
      e.preventDefault();
      setShowLoginForm(false)
      setShowSignupForm(true)
    }
    
    return (
        <React.Fragment>
            <Toolbar onLoginClick = {handleLoginClick}/>
            {showLoginForm && <LoginForm onSignupClick={handleSignupClick}/>}
            {showSignupForm && <SignupForm />}
        </React.Fragment>
    )
}

export default Welcome;
