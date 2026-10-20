const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User with this email already exists! Please login.");
        return;
    }

    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    };

  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});