import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <>
    <div className="bg-blue-200 p-5 flex  gap-5 ">
        <div className="bg-amber-500 p-2 rounded-2xl text-center flex justify-center items-center">Welcome to our React Rendering Operation</div>
        <div className="bg-green-500 p-2 rounded-2xl flex justify-center items-center">
            <Link to="/">Home</Link>
        </div>
    </div>
    </>
    
  )
}

export default NavBar