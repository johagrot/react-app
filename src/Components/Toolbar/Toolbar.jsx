import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
    return (
    <div className = "toolbar">
        <ul>
            <li> <a href = "/home"> Home </a></li>
            <li> <a href = "/about"> About </a></li>
            <li> <a href = "/contatc"> Contact </a></li>
        </ul>
    </div>
    )
}

export default Toolbar