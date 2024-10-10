import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";


function About() {
    let[searchParams, setSearchParams] = useSearchParams();
    // const location = useLocation();
    const { userName } = useParams();
    // console.log(location);
    console.log(searchParams.get("name"));
    
    return(
        <div style={{background: "pink" , border: "2px solid black"}}>
            <h1 style={{fontSize: "25px", fontWeight: "900"}}>About ({userName})</h1>
        </div>
    )
}
export default About;