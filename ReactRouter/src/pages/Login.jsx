import React from "react";
import AppLogin from "../Components/Login";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div style={{margin: "60px"}}>
            <AppLogin />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                <p>Don't have an account</p> 
                <Link to={'/signup'}>SignUp</Link>
            </div>
        </div>
    )
} 
export default Login; 