import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/user'
import movieReducer from './reducer/user'
const store = configureStore({
    reducer: {
        movie: movieReducer,
    }
    

    // reducer: {
    //     user: userReducer,
    // }

})

export default store;