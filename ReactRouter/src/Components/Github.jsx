import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const[data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/muhammadahmedanis')
    //     .then(res => res.json())
    //     .then(val => setData(val));
    // }, [])
  return (
    <div className='text-center font-bold'>Github: {data?.followers}</div>
  )
}

export default Github

export const githubInfo = async()=> {
  const res = await fetch('https://api.github.com/users/muhammadahmedanis');
  return res.json(); 
}