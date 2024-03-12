function checkPasswordStrength() {
    var passwordInput = document.getElementById('password-input');
    var passwordResult = document.getElementById('password-result');
    var password = passwordInput.value;

    // check password length
    if (password.length < 10) {
        passwordResult.textContent = '[*] Password is NOT strong. Please try again.';
        return;
    }

    // check password for uppercase, lowercase, and numeric chars
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var digitCount = (password.match(/\d/g) || []).length;

    // check if all conditions are satisfied
    var isStrong = hasUpper && hasLower && digitCount >= 3;
    
    if (isStrong) {
        passwordResult.textContent = '[*] Password is strong';
    } else {
        passwordResult.textContent = '[*] Password is NOT strong. Please try again.';
    }
}

// Bind the function to the password management tab/button
document.getElementById('password-management-tab').addEventListener('click', function() {
    // Assuming the password input and result elements are within the password management tab
    checkPasswordStrength();
});
