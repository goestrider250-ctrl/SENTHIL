import {useState} from "react"

const Traffic = () => {
    const [light, setLight] = useState("red")
  return (
    <>
    <div className="flex flex-col items-center gap-4">
        <div>
            <h1 className="text-2xl font-bold">Traffic Light</h1>
        </div>
        <div  className="flex gap-10">
            <button onClick={()=> setLight("red")} className="bg-red-500 p-2 rounded-2xl">Red</button>
            <button onClick={()=> setLight("yellow")} className="bg-yellow-500 p-2 rounded-2xl">Yellow</button>
            <button onClick={()=> setLight("green")} className="bg-green-500 p-2 rounded-2xl">Green</button>
        </div>
        <div>
            {light == "red" ? <h2 className=" rounded-2xl p-3 bg-red-500">Stop</h2> : light == "yellow" ? <h2 className=" bg-yellow-500 rounded-2xl p-3">Ready</h2> : <h2 className="bg-green-500 rounded-2xl p-3">Go</h2>}
        </div>
    </div>
    
    </>
  )
}
export default Traffic