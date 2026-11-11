
import { useState } from 'react'

const App = () => {

  const [showname, setshowname] = useState("")
  const [showage, setshowage] = useState("")
  const [shownumber, setshownumber] = useState("")

  const [data, setData] = useState([])

  const getName = (e) => {
    setshowname(e.target.value)
  }

  const getAge = (e) => {
    setshowage(e.target.value)
  }

  const getNumber = (e) => {
    setshownumber(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    const obj = {
      id: Date.now(),
      name: showname,
      age: showage,
      number: shownumber
    }

    setData([...data, obj])

    setshowname("")
    setshowage("")
    setshownumber("")
  }

  return (
    <>
      <div>
        <form onSubmit={handleClick}>

          <input
            type="text"
            value={showname}
            placeholder="Enter name"
            onChange={getName}
          />

          <input
            type="number"
            value={showage}
            placeholder="Enter age"
            onChange={getAge}
          />

          <input
            type="number"
            value={shownumber}
            placeholder="Enter number"
            onChange={getNumber}
          />

          <button onClick={handleClick}>Click</button>

        </form>

        {data.map((e) => (
          <div key={e.id}>
            <h3>Name: {e.name}</h3>
            <p>Age: {e.age}</p>
            <p>Number: {e.number}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
