import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home(){
    // const[counter, setCounter] = useState(0);
    // const state = useSelector(state => state.user);
    // const dispatch = useDispatch();

    // console.log(state);

    // const incrementCounter = () => {
    //     dispatch({ type: "inc" })
    // }
    const movies = useSelector(state => state.movie)
    console.log(movies);
    
    return(
        <div>
        {/* //     <h1>Vite + React</h1>
        //     <p>{state.counter}</p>
        //     <button onClick={incrementCounter}>Increase</button> */}
        </div>
    )
}

export default Home;