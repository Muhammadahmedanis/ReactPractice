import { useEffect, useState } from 'react'
import './App.css'
import { Pagination } from 'antd';

function App() {
  const[products, setProducts] = useState([]);
  const[limit, setLimit] = useState(20);
  const[skip, setSkip] = useState(0);
  const[total, setTotal] = useState(0);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      setProducts(res.products);
      setTotal(res.total);
      setLoading(false);
    })
  }, [limit, skip])

  // onScroll pagination
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // console.log(window.innerHeight);
  //     // console.log(Math.floor(document.documentElement.scrollTop + window.innerHeight));
  //     // console.log(document.documentElement.offsetHeight);
  //     if( Math.floor(window.innerHeight + document.documentElement.scrollTop) == document.documentElement.offsetHeight && !loading) {
  //       console.log(limit);
  //       if(limit < total) {
  //         setLimit(limit + 20);
  //       }
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll)
  // }, [limit, loading])
  // console.log(products.length);

  return(
    <div className='App mb-8'>
      <h1 className='text-3xl text-center font-bold p-2'>Scroll & Pagination</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 mx-10'>
        { loading ? <h1 className='font-bold text-2xl text-center'>Loading...</h1> : null }
          {
            products.map((data) =>
              <div key={data.id} className='border shadow flex flex-col m-1 justify-center items-center mb-4'>
                <img src={data.thumbnail} height={200} width={200} alt="" />
                <div className='flex justify-between p-2 w-full'>
                    <h1 className='font-semibold'>{data.title}</h1>
                    <h1 className='font-semibold'>{data.price}</h1>
                </div>
              </div> 
            )
          }
      </div>
           <Pagination onChange={(num) => setSkip((num - 1) * limit)} onShowSizeChange={(num, pageSize) => setLimit(pageSize)} defaultCurrent={1} total={total} pageSize={limit} />
    </div>
  )
}

export default App
