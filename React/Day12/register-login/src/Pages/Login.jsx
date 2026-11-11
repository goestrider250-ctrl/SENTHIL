import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.email === email && user.password === password) {
      alert('Login Successful!')
      navigate('/dashboard')
    } else {
      alert('Invalid Email or Password')
    }
  }

  return (
    <div className="container">

      <form onSubmit={handleLogin}>

        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p>
          New User? <Link to="/">Register</Link>
        </p>

      </form>

    </div>
  )
}

export default Login