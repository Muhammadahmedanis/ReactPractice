import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Profile from './pages/Profile.jsx'
import Github, { githubInfo } from './Components/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])
//     <Route path='about' element={ <About />}> <Route path='signup'/> </Route>
    

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout />} >
      <Route path='' element={ <Home />} />
      <Route path='about' element={ <About />} />
      <Route path='contact' element={ <Contact /> } />
      <Route path='user/:id' element={ <Profile /> }/>
      <Route
      loader={githubInfo} 
      path='github'
      element={ <Github /> }
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    // <App />
    <RouterProvider router={router} />
)
