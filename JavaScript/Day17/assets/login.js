const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

   
    let users = JSON.parse(localStorage.getItem('users')) || [];


    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
       
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));
        alert("Login successful!");
        
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
});