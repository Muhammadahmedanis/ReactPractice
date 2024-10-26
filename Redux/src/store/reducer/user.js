import moviesData from "../../movieData";
import { createSlice  } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: moviesData,
    }
})

// const INITIAL_STATE = {
       // counter: 1,
// }
// const userReducer = (state = INITIAL_STATE, action) => {
    // if(action.type === "inc"){
    //     return { ...state,  counter: state.counter + 1 };
    // }
    // return state;
// }
// export default userReducer;

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
