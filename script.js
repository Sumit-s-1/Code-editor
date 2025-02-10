// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate a login process (replace this with actual authentication logic)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the online compiler page
        window.location.href = "compiler.html"; // Redirect to the compiler page
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});