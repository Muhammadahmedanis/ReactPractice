import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Components/modal';

function App() {
  const[modalState, setModalState] = useState();

  return (
    <>
      <button onClick={() => setModalState("success")}>Success</button>
      <button onClick={() => setModalState("error")}>Error</button>
      <button onClick={() => setModalState("danger")}>Dnager</button>

      {
        modalState == "success" ? ( <Modal> <button style={{backgroundColor: "green"}}>Success</button> <p>Successfully register</p>  </Modal>) :
        modalState == "error" ? (<Modal> <button style={{backgroundColor: "yellow"}}>Error</button> <p>Error fond</p> </Modal>) :
        modalState == "danger" ? (<Modal> <button style={{backgroundColor: "red"}}>danger</button> <p>alarming....</p> </Modal>) : null
      }
    </>
  )
}

export default App
