import { useState } from "react"

const EvenOdd = () => {

 const[evenOdd, setNumber ] = useState(0)
  return (
    <>
    <div className="  p-3 flex flex-col gap-5 justify-center items-center">
      <div>
        <p className="text-lg font-bold bg-gray-400 w-30 h-10 flex justify-center items-center rounded-2xl"> Number:{evenOdd}</p>
      </div>
      <div className="flex gap-10">
        <button onClick={()=> setNumber(evenOdd + 1) } className="bg-blue-300 p-2 rounded-2xl">Increment</button>
        <button onClick={()=> setNumber(evenOdd - 1)} className="bg-red-300 p-2 rounded-2xl">Decrement</button>
        
      </div>
      <div>
        <h1 className="text-lg font-bold bg-gray-400 w-50 h-10 flex justify-center items-center rounded-2xl">{evenOdd % 2 === 0 ? "EVEN NUMBER" : "ODD NUMBER"}</h1>
      </div>
    </div>
  

    </>
    
  )
}

export default EvenOdd