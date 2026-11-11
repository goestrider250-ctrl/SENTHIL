import img1 from "./assets/images/images1.png";
import Navbar from "./Component/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2>Home</h2>
        <img src={img1} alt="Home Image" width="500" />
      </section>
    </>
  );
}

export default App;