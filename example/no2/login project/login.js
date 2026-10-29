function login() {

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username == "senthil" & password == "12345") {
        document.getElementById("msg").innerHTML = "Login Successful";
    }
    else {
        document.getElementById("msg").innerHTML = "Invalid Login";
    }

}