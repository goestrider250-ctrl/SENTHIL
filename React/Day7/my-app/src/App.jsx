import Banner from "./components/Banner"
import NavBar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Result from "./pages/Result"
import Hide from "./pages/Hide"
import EvenOdd from "./pages/EvenOdd"
import Traffic from "./pages/Traffic"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <NavBar />
    <Banner />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hide" element={<Hide />}/>
      <Route path="/evenodd" element={<EvenOdd />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/result" element={<Result />}/>
      <Route path="/traffic" element={<Traffic />}/>
    </Routes>
    </>
    
  )
}

export default App