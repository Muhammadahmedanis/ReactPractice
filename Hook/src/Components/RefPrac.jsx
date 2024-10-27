import React, { useRef, useState } from 'react'

function RefPrac() {
    const inp1 = useRef()
    const[num, setNum] = useState(0)
    
    const handle = () => {
        console.log("OK");
    }
    const getNum = () => {
        console.log('ok1');
        console.log(inp1.current);
    }


  return (
    <>
    <h1>{num}</h1>
    <input ref={inp1} type="number" value={num} onChange={(e) => setNum(e.target.value)} />
    <button onClick={getNum}>Rupees</button>
    <button onClick={handle}>Increment</button>
    </>
  )
}

export default RefPrac