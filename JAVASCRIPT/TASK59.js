// Function to toggle the visibility of the navigation menu on mobile screens
function toggleNav() {
  // Retrieve the DOM element with the ID 'navLinks'
  // `document.getElementById` is a method that returns a reference to the element by its ID
  const navLinks = document.getElementById("navLinks");

  // `navLinks.classList` returns the DOMTokenList of the class names of the element
  // `classList.toggle` adds the specified class ('active') if it is not present,
  // or removes it if it is present
  // This toggling is used to show or hide the navigation menu
  navLinks.classList.toggle("active");
}

// Function to validate the form inputs
function validateForm() {
  // Retrieve the value of the input field with ID 'name'
  // `document.getElementById('name')` returns the input element
  // `.value` accesses the value of the input field
  // `.trim()` removes any whitespace from the beginning and end of the string
  const name = document.getElementById("name").value.trim();

  // Retrieve the value of the input field with ID 'email' and trim it
  const email = document.getElementById("email").value.trim();

  // Retrieve the value of the textarea with ID 'message' and trim it
  const message = document.getElementById("message").value.trim();

  // Retrieve the element with ID 'errorMessage'
  // This is where error messages will be displayed to the user
  const errorMessage = document.getElementById("errorMessage");

  // Check if any of the fields (name, email, message) are empty
  // `!name` checks if the variable 'name' is falsy (empty string or other falsy values)
  // Similarly, `!email` and `!message` check for their respective fields
  if (!name || !email || !message) {
    // Set the text content of the 'errorMessage' element to "All fields are required!"
    // This message will be displayed if any of the fields are empty
    errorMessage.textContent = "All fields are required!";

    // Return `false` to prevent form submission
    // This ensures that the form will not be submitted if validation fails
    return false;
  }

  // If all fields are filled, proceed to validate the email address
  // Call the helper function 'validateEmail' with the 'email' variable as argument
  if (!validateEmail(email)) {
    // If 'validateEmail' returns `false`, set the error message to "Please enter a valid email address!"
    // This message will be displayed if the email is not in a valid format
    errorMessage.textContent = "Please enter a valid email address!";

    // Return `false` to prevent form submission
    return false;
  }

  // If all validations pass, clear the error message
  // Set the text content of 'errorMessage' to an empty string
  // This removes any previous error messages
  errorMessage.textContent = "";

  // Return `true` to allow the form to be submitted
  // This indicates that all validations are successful
  return true;
}

// Helper function to validate the email format
function validateEmail(email) {
  // Regular expression to validate the email format
  // A regular expression (regex) is a sequence of characters defining a search pattern
  // The regex pattern used here is for basic email validation
  // ^: Asserts position at the start of the string
  // [^\s@]+: Matches one or more characters that are not whitespace or '@'
  // @: Matches the '@' character
  // [^\s@]+: Matches one or more characters that are not whitespace or '@' after '@'
  // \.: Matches a '.' character
  // [^\s@]+: Matches one or more characters that are not whitespace or '@' after '.'
  // $: Asserts position at the end of the string
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // `re.test(email)` tests the 'email' string against the regular expression pattern
  // It returns `true` if the email matches the pattern, otherwise `false`
  return re.test(email);
}
