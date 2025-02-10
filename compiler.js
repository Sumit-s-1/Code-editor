document.getElementById("run").addEventListener("click", function() {
    const code = document.getElementById("code").value;
    let output;

    try {
        // Use the Function constructor to execute the code
        const func = new Function(code);
        output = func();
    } catch (error) {
        output = error.toString();
    }

    document.getElementById("output").textContent = output;
});

// Logout functionality
document.getElementById("logout").addEventListener("click", function() {
    // Redirect to the login page
    window.location.href = "index.html"; // Assuming your login page is index.html
});