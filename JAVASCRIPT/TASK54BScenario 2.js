
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let message = '';

    switch (true) {
        case !username:
            message = 'Username is required.';
            break;
        case !email:
            message = 'Email is required.';
            break;
        case !password:
            message = 'Password is required.';
            break;
        default:
            message = 'Form submitted successfully!';
    }

    document.getElementById('message').innerText = message;
});
