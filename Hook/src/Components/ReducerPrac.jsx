import { useReducer, useState } from 'react'
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state, counter: state.counter + 1};
      case 'decrement':
        return {...state, counter: state.counter - 1};
      case 'likes':
        return {...state, likes: state.likes + 1};
      case 'unlikes':
        return {...state, likes: state.likes - 1};
        case 'theme':
          return {...state, themeChg: !state.themeChg};
      default:
        return state;
    }
}


const initialState = {
    counter: 0,
    likes: 0,
    themeChg: true,
}

function ReducerPrac() {
    const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{backgroundColor: `${state.themeChg ? 'white' : 'black'}`, color: `${state.themeChg ? 'black' : 'white'}`, padding: '30px'}}>
    <h1>Counter: {state.counter}</h1>
    <h1>Likes: {state.likes}</h1>
    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    <button onClick={() => dispatch({type: 'likes'})}>Likes</button>
    <button onClick={() => dispatch({type: 'unlikes'})}>Unlikes</button>
    <button onClick={() => dispatch({type: 'theme'})}>Theme Changer</button>
  </div>
  )
}

export default ReducerPrac