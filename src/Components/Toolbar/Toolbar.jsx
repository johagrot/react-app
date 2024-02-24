import React, { useState } from "react";
import "./Toolbar.css";
import LoginForm from "../LoginForm/LoginForm";

const Toolbar = ({ onLoginClick }) => {
    
    return (
    <body>
        <div className="toolbarContainer">
            <div className="pageName">
                <h3>
                    <span className="greenLetter">E</span>
                    <span className="greenLetter">a</span>
                    <span className="whiteLetter">t</span>
                    <span className="whiteLetter">a</span>
                    <span className="redLetter">l</span>
                    <span className="redLetter">y</span>
                    {/* <span>!</span> */}
                </h3>
            </div>
            <div className = "toolbar">
                <ul>
                    <li> <a href = "/home"> Home </a></li>
                    <li> <a href = "/about"> About </a></li>
                    <li> <a href = "/contact"> Contact </a></li>
                    <li> <a href = "/login" onClick={onLoginClick}> Log in </a></li>
                </ul>
            </div>
        </div>
    </body>
    )
}

export default Toolbar