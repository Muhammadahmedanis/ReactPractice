import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './pages/about.jsx'
// import Contact from './pages/Contact.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={ <Layout /> }>
//       <Route path='/about' element={ <About /> }/>
//       <Route path='/contact' element={ <Contact /> }/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <RouterProvider router={router} /> */}
  </>
)
