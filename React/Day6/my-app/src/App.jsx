import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Ai from "./pages/Ai"
import Future from "./pages/Future"
import Home from "./pages/Home"
import Ml from "./pages/Ml"
import Real_wordAi from "./pages/Real_wordAi"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
    <NavBar />
    
      
      

    <Routes>
      <Route
          path="/"element={
            <>
              <Banner />
              <Home />
            </>
          }
        />
      
      <Route  path="/" element={<Home />}/>
      <Route  path="/future" element={<Future />}/>
      <Route  path="/ai" element={<Ai />}/>
      <Route  path="/ml" element={<Ml />}/>
      <Route  path="/real_worldAi" element={<Real_wordAi />}/>
      
    </Routes>
  
    
    </>
  )
}

export default App