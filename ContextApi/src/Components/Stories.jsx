import React from 'react'
import useStories from '../context/StoriesContext'
function Stories() {
    const{ hits = [], isLoad } = useStories();
    if(isLoad){
        console.log(isLoad);
        return (
            <h1 className='font-extrabold'>Loading....</h1>
        );
    }
  return (
    <div>
        {
            hits.map((val, ind) => {
                return <h2 key={ind}>{val.title}</h2>
            })
        }
    </div>
  )
}

export default Stories