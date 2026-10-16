const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    // Get values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const course = document.getElementById("course").value;

    const message = document.getElementById("message");

    // Check if any field is empty
    if (!name || !email || !phone || !password || !confirmPassword || !course) {
        message.textContent = "Please fill in all fields.";
        message.className = "text-danger mb-3";
    }

    // Password must contain at least 6 characters
    else if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.className = "text-danger mb-3";
    }

    // Check if both passwords match
    else if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.className = "text-danger mb-3";
    }

    // Everything passed
    else {
        message.textContent = "Registration successful!";
        message.className = "text-success mb-3";

        form.reset(); // Clear the formm
    }
});
