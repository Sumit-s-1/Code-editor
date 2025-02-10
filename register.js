// register.js
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation
    if (password !== confirmPassword) {
        document.getElementById("registration-message").textContent = "Passwords do not match.";
        return;
    }

    // Simulate registration process (replace this with actual registration logic)
    alert("Registration successful! You can now log in.");
    // Redirect to the login page
    window.location.href = "index.html"; // Redirect to login page after registration
});