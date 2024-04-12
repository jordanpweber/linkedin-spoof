'use strict';

'use strict';

// DOM Properties for Login
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Login Verification
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const storedUsername = 'user'; // Change this
    const storedPassword = 'password'; // Change this

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        errorMessage.textContent = '';
        window.location.href = 'home.html'; // Redirect to the home page
    } else {
        errorMessage.textContent = 'Incorrect username or password';
    }
});
