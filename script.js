/*const form = document.getElementById("registerForm");

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

        form.reset(); // Clear the form
    }
}); */












// Get the form from HTML using its id "registerForm"
const form = document.getElementById("registerForm");

// addEventListener waits for a specific event to happen.
// "submit" means the user clicks the submit button or submits the form.
form.addEventListener("submit", function(event) {

    // Stop the browser from reloading the page after form submission.
    // We use this because we want to show messages without refreshing.
    event.preventDefault();

    // Get the value entered in the Name input.
    // .value reads what the user typed.
    // .trim() removes extra spaces from the start and end.
    const name = document.getElementById("name").value.trim();

    // Get the user's email address and remove extra spaces.
    const email = document.getElementById("email").value.trim();

    // Get the user's phone number and remove extra spaces.
    const phone = document.getElementById("phone").value.trim();

    // Get the password entered by the user.
    // We do not use trim() here because spaces can be part of a password.
    const password = document.getElementById("password").value;

    // Get the password entered in the Confirm Password field.
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Get the selected course from the dropdown.
    const course = document.getElementById("course").value;

    // Get the empty message area from HTML.
    // We will use this element to display errors or success messages.
    const message = document.getElementById("message");


    // CHECK 1: Check whether any required field is empty.
    // The || operator means OR.
    // If even one condition is true, this block will run.
    // The ! operator means NOT; for strings, it checks whether the value is empty.
    if (!name || !email || !phone || !password || !confirmPassword || !course) {

        // Put an error message inside the message element.
        message.textContent = "Please fill in all fields.";

        // Apply Bootstrap's red text class and bottom margin.
        // text-danger = red text; mb-3 = bottom margin.
        message.className = "text-danger mb-3";

    }

    // CHECK 2: Run this only if no field is empty.
    // .length tells us how many characters the password contains.
    // < means less than, so fewer than 8 characters is not allowed.
    else if (password.length < 8) {

        // Display an error if the password is too short.
        message.textContent = "Password must be at least 8 characters.";

        // Make the error message red using Bootstrap.
        message.className = "text-danger mb-3";

    }

    // CHECK 3: Run this if the previous checks passed.
    // !== means "not equal in value or type".
    // If both passwords are different, this condition is true.
    else if (password !== confirmPassword) {

        // Tell the user that the passwords do not match.
        message.textContent = "Passwords do not match.";

        // Apply Bootstrap's red error text styling.
        message.className = "text-danger mb-3";

    }

    // CHECK 4: The else block runs only when all previous checks pass.
    // This means the fields are filled, the password is long enough,
    // and both passwords match.
    else {

        // Display the success message inside the HTML page.
        message.textContent = "Registration successful! ";

        // Change the message to green using Bootstrap's text-success class.
        message.className = "text-success mb-3";

        // Clear all the input fields and reset the course dropdown.
        // This does NOT save the user's information anywhere.
        form.reset();

    }

// Close the function and finish listening for the submit event.
});