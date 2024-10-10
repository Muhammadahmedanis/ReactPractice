import React from "react";
import { Link, useNavigate } from "react-router-dom";

// use link instead of anchor
// location.href instead of useNavigate

function Navbar({ children }) {
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor: "red", height: "80vh", width: "100%", cursor: "pointer"}}>
            <div style={{display: "flex", justifyContent: "center", gap: "10px", fontWeight: "800", fontSize: "30px"}}>
                {/* <p onClick={() => navigate("/home")}>HOME</p> */}
                <Link to={"/home"}> <p>HOME</p> </Link>
                <Link to={"/about"}> <p>ABOUT</p> </Link>
                {/* <p onClick={() => navigate("/about")}>ABOUT</p> */}
            </div>
            { children }
        </div>
    )
}
export default Navbar;