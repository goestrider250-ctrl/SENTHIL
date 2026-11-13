
import { useState, useEffect } from "react";

const App = () => {

  // Store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  // Store all users
  const [users, setUsers] = useState([]);

  // Loading and error messages
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const API = "https://jsonplaceholder.typicode.com/users";

  // GET method - Fetch existing users
  useEffect(() => {

    const getUsers = async () => {
      try {
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();

  }, []);

  // POST method - Register new user
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Form validation
    if (!name.trim() || !email.trim() ||
        !phone.trim() || !username.trim()) {
      setError("Please fill all the fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    const phonePattern = /^\+?[0-9]{10,15}$/;

    if (!phonePattern.test(phone)) {
      setError("Enter a valid phone number (10-15 digits)");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must contain at least 3 characters");
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      username: username.trim()
    };

    try {
      setSubmitting(true);

      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      // Add new user without page refresh
      setUsers((prevUsers) => [
        ...prevUsers,
        { ...data, clientId: Date.now() }
      ]);

      // Clear input fields
      setName("");
      setEmail("");
      setPhone("");
      setUsername("");

      setMessage("User registered successfully!");

    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>

      <h1>User Registration Application</h1>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={styles.form}>

        <h2>Register New User</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />

        <button
          type="submit"
          disabled={submitting}
          style={styles.button}
        >
          {submitting ? "Registering..." : "Register User"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}

      </form>

      {/* Display Users */}
      <h2>Registered Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (

        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Username</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.clientId || user.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.phone}</td>
                  <td style={styles.td}>{user.username}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      )}

    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial",
    color: "#222"
  },

  form: {
    maxWidth: "450px",
    margin: "20px auto 40px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5"
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "14px"
  },

  th: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px",
    border: "1px solid #ddd"
  },

  td: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center"
  },

  error: {
    color: "red",
    textAlign: "center"
  },

  success: {
    color: "green",
    textAlign: "center"
  }
};

export default App;
