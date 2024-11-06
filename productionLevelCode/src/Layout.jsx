import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';

function Layout() {
  const[theme, setTheme] = useState('light');
  const lightThemeMode = () => {
    setTheme('light');
  }
  const darkThemeMode = () => {
    setTheme('dark');
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme);
  }, [theme])
  return (
    <>
      <ThemeProvider value={{theme, lightThemeMode, darkThemeMode}}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout