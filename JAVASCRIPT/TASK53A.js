// script.js
function checkAccess() {
    // Variables
    const role = document.querySelector('#role').value;
    const age = parseInt(document.querySelector('#age').value);
    let accessMessage = '';

    if (role === '' || age === '') {
	alert('Please enter your role and age!');
	document.getElementById('access-message').innerHTML = 'Please enter the input above';
	return;
	}

    // Logic
    if (role === 'admin' || role === 'moderator' || role === 'Admin' || role === 'Moderator') {
        accessMessage = `Welcome you have full acces.`;
        document.querySelector('#accessMessage').className = role;
    } else if (role === 'member' && age >= 18) {
        accessMessage = `Welcome Member, You have access to member content!`;
        document.querySelector('#accessMessage').className = 'member';
    } else if (role === 'guest') {
        accessMessage = `Welcome Guest, You have access to guest content!`;
        document.querySelector('#accessMessage').className = 'guest';
    } else {
        accessMessage = `No access granted.`;
        document.querySelector('#accessMessage').className = 'no-access';
    }

    // Display the message
    document.querySelector('#accessMessage').innerText = accessMessage;
}