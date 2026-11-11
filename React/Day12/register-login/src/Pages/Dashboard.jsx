import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))

  function handleLogout() {
    localStorage.removeItem('user')
    alert('Logout Successful!')
    navigate('/login')
  }

  return (
    <div className="container">

      <h1>Welcome {user?.name}!</h1>

      <h3>Dashboard Page</h3>

      <p>You have successfully logged in.</p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  )
}

export default Dashboard