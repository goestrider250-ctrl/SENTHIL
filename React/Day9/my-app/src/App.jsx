
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => {
//         setCount(count + 1)
//       }}>
//         Increment
//       </button>
//     </>
//   )
// }

// export default App




import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState([
    { name: 'Senthil', age: 30 },
    { name: 'Meju', age: 25 }
  ])

      
  const handleClick =()=> {
      setCount([...count, { name: 'Meju', age: 20 },{ name: 'Mu', age: 20 },{ name: 'ram', age: 20 },{ name: 'Muthu', age: 20 }])
  }
  return (
    <>
      <div>
        {count.map((e, i) => (
          <p key={i}>
            {e.name} : {e.age}
            
          </p>
        ))}
      </div>

      <button onClick={(handleClick)}>
        
        Add Person
      </button>
    </>
  )
}

export default App
