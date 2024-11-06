import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import NoFound from '../components/NoFound.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Layout /> }>
        <Route path='*' element={ <NoFound /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/contact' element={ <Contact /> }/>
      </Route>
    )
)

function Routing() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Routing;