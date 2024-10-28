import React, {useState, useContext} from 'react'
import userContext from '../context/userContext'

function Login() {
    const[username, setUserName] = useState('');
    const handleSubmit = () => {

    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login