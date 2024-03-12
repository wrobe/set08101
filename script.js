function checkPasswordStrength() {
    const passwordInput = document.getElementById('password-input');
    const passwordResult = document.getElementById('password-result');
    const password = passwordInput.value;
    
    // Implementing the strength check criteria
    const isStrong = password.length >= 10 &&
                     /[a-z]/.test(password) &&
                     /[A-Z]/.test(password) &&
                     /[0-9]/.test(password).length >= 3;
    
    if (isStrong) {
        passwordResult.textContent = 'Password is strong';
    } else {
        passwordResult.textContent = 'Password is NOT strong. Please try again.';
    }
}

// additional functionality dark mode
// document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
