import React from "react";
import "./Authentification.css";
import { signInWithGoogle } from "../../Firebase";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../../Firebase";

const Authentification = () =>{    
    return(
        <div className="auth_body">
            <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
            <h5> {localStorage.getItem("name")}</h5>
            <h6> {localStorage.getItem("email")}</h6>
        </div>
    );
};

export default Authentification;