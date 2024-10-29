import React, {useState, useContext} from 'react'
import userContext from '../context/userContext'

function Login() {
    const[username, setUserName] = useState('');
    const [password, setpassword] = useState('')

    const {setUser} = useContext(userContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h2>login</h2>
        <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='username' />
        <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login