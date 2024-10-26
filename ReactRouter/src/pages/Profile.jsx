import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
function Profile() {
    const { id } = useParams();
    return(
        <div>
            {/* <Navbar> */}
                <h1 className="text-center">Profile {id}</h1>
            {/* </Navbar> */}
        </div>
    )
}
export default Profile;