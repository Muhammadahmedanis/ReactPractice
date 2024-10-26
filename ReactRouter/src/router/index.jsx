import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import { Spin } from 'antd';

// function AppRouter(){
//     const[user, setUser] = useState(true);
//     return(
//         <BrowserRouter>
//             <Routes> 
//                 <Route path='/' element={ user ? <Navigate to={"/about/anas6687"} /> : <Login />} />
//                 <Route path='/home' element={ <Navbar> <Home /> </Navbar> } />
//                 <Route path='/about/:userName' element={ <Navbar> <About /> </Navbar> } />
//             </Routes>
//         </BrowserRouter>
//     )
// }


// login and signup page
function AppRouter(){
    const[loader, setLoader] = useState(false);
    return(
        <>
        {
            loader ?
            <div style={{padding: "200px"}}>
                <Spin tip='loading' size="large">
                    <div className='content'/>
                </Spin>
            </div> 
            :
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        } 
        </>
    )
}
export default AppRouter;