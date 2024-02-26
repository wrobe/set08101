document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeSwitch = document.querySelector('.dark-mode-slider input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    darkModeSwitch.addEventListener('change', switchTheme, false);

    // Check for saved user preference, if any, on page load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        darkModeSwitch.checked = (currentTheme === 'dark');
    }
});
