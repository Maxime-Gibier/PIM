import React from "react";
import "./Authentification.css";
import { signInWithGoogle } from "../../Firebase";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../../Firebase";

const Authentification = () =>{    
    return(
        <div>
            <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
            <h1> {localStorage.getItem("name")}</h1>
            <h1> {localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("profilePic")} alt="profilePic" />
        </div>
    );
};

export default Authentification;