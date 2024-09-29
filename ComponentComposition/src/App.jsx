import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Components/modal';

// function App() {
//   const[modalState, setModalState] = useState();

//   return (
//     <>
//       <button onClick={() => setModalState("success")}>Success</button>
//       <button onClick={() => setModalState("error")}>Error</button>
//       <button onClick={() => setModalState("danger")}>Dnager</button>

//       {
//         modalState == "success" ? ( <Modal> <button style={{backgroundColor: "green"}}>Success</button> <p>Successfully register</p>  </Modal>) :
//         modalState == "error" ? (<Modal> <button style={{backgroundColor: "yellow"}}>Error</button> <p>Error fond</p> </Modal>) :
//         modalState == "danger" ? (<Modal> <button style={{backgroundColor: "red"}}>danger</button> <p>alarming....</p> </Modal>) : null
//       }
//     </>
//   )
// }

// export default App


function App() {
  const[count, setCount] = useState(0);
  const tabChanger = () => {
    if(count >= 2){
      setCount(0);
      return
    }
    setCount(count + 1);
  }
  return (
    <>
    {
      count == 1 ? (<Tab key="1" text="tab1" />) : count == 2 ? (<Tab key="2" text="tab2" />) :(<Tab key="3" text="tab3" />)
    }

      <button onClick={tabChanger}>Tab changer</button>
    </>
  )
}

export default App

const Tab = ({text}) => {
  const[likes, setLikes] = useState(0);
  const likeHandler = () => {
    setLikes(likes + 1);
  }
  return(
    <>
    <p>{`Ma hun ${text}`}</p>
    <p>likes: {likes}</p>
    <button onClick={likeHandler}>Like on Post</button>
    </>
  )
}