import { useState, useEffect, useReducer, Children } from 'react'
import './App.css'
// import { UserProvider } from './context/userContext'
// import ThemeBtn from './Components/ThemeBtn'
// import Card from './Components/Card'
// import Form, { FormProvider } from './context/FormContext'
// import UserContextProvider from './context/userContextProvider'
// import Login from './Components/Login'
// import Profile from './Components/Profile'
import reducer from './reducer';
import { StoriesProvider } from './context/StoriesContext';
import Stories from './Components/Stories';

let API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoad: true,
  query: 'HTML',
  page: 0,
  nbPages: 0,
  hits: [],
}

function App() {
  // const [themeMode, setthemeMode] = useState("light")
  // const[data, setData] = useState({name: "Ali"});

  // const lightTheme = () => {
  //   setthemeMode("light")
  // }
  // const darkTheme = () => {
  //   setthemeMode("dark")
  // }

  // useEffect(() => {
  //   document.querySelector('html').classList.remove('light', 'dark')
  //   document.querySelector('html').classList.add(themeMode);

  // }, [themeMode])


  const[state, dispatch] = useReducer(reducer, initialState)
  const fetchData = async (url) => {
    dispatch({type: 'loading'})
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
      dispatch({
        type: 'getStories', 
        payload: { hits: data.hits },
    })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(`${API}query=${state.query}&page=${state.page}`);
  }, [])
  
  return (
    <>
        {/* <UserContextProvider>
          <Login />
          <Profile />
        </UserContextProvider> */}
        {/* <Form.Provider value={{data, setData}}> */}


        {/* <FormProvider value={{data, setData}}>

        <UserProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                      <Card />
                  </div>
              </div>
          </div>
        </UserProvider>

        </FormProvider> */}
        {/* </Form.Provider> */}

        <StoriesProvider value={{...state}}>
          <Stories Children={Children} />
          {/* {Children} */}
        </StoriesProvider>

    </>
  )
}

export default App