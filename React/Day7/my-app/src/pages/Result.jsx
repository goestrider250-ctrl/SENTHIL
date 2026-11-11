import { useState } from "react"

const Result = () => {

  const[mark, setMark] = useState(35)

  return (
    <>
    <div className="  p-3 flex flex-col gap-5 justify-center items-center">
      <div>
        <h1  className="text-lg font-bold bg-gray-400 w-30 h-10 flex justify-center items-center rounded-2xl">Mark:{mark}</h1>
      </div>
      <div className="flex gap-10">
        <button onClick={()=> setMark(mark + 1)}  className="bg-blue-300 p-2 rounded-2xl">Increment</button>
        <button onClick={()=> setMark(mark - 1)} className="bg-red-300 p-2 rounded-2xl">Decrement</button>
      </div>
      <div  >
        {mark > 35?(<h1 className="text-lg font-bold bg-green-400 w-50 h-10 flex justify-center items-center rounded-2xl">Pass</h1>) : (<h1 className="text-lg font-bold bg-red-400 w-50 h-10 flex justify-center items-center rounded-2xl">Fail</h1>) }
      </div>
    </div>
   

    </>
    
  )
}

export default Result