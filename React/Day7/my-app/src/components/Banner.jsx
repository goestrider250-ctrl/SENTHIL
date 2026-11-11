import { Link } from "react-router-dom"
const Banner = () => {
  return (
   <>
   <div className="bg-amber-100 flex justify-between  p-3 items-center h-20 ">
    <Link to="/hide" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> Hide</Link>
    <Link to="/evenodd" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> Even Odd</Link>
    <Link to="/login" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> Login Page</Link>
    <Link to="/result" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center">Results </Link>
    <Link to="/traffic" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center">Traffic</Link>
   </div>
   </>
  )
}

export default Banner