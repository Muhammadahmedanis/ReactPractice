import React from "react";
import { Link } from "react-router-dom";
import AppSignup from "../Components/Signup";

function Signup() {
    return(
        <div style={{margin: "60px"}}>
            <AppSignup />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                    <p>Already have an account</p> 
                    <Link to={'/'}>Login</Link>
                </div>
        </div>
    )
} 
export default Signup; 