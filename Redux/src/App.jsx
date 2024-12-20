import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}

export default App