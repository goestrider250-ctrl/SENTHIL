import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()

    const user = { name, email, password }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Register Successful!')

    navigate('/login')
  }

  return (
    <div className="container">
      <form onSubmit={handleRegister}>

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  )
}

export default Register