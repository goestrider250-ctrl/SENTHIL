import { useState } from "react"

const Home = () => {
    const[Show, setShow] = useState(false)
  return (
   <>
   <div className="bg-amber-300 p-3 flex gap-10 justify-center items-center">
    <button onClick={()=> setShow(true)} className="bg-blue-300 p-2 rounded-2xl">show</button>
    <button onClick={()=> setShow(false)} className="bg-red-300 p-2 rounded-2xl" >hide</button>
   </div>
   <div >
    {Show && <h1 className=" p-3 flex gap-10 justify-center items-center bg-green-400">Show</h1>}
   </div>

   </>
  )
}

export default Home