document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
// Define the pages for search functionality
const pages = [
    { title: "Home", url: "index.html" },
    { title: "Basic Networking", url: "basic-networking.html" },
    { title: "Password Checker", url: "https://www.passwordmonster.com/" },
    { title: "Secure Your Home Router", url: "secure-your-home-router.html" },
    { title: "Build Your Own Secure Router", url: "https://circuitdigest.com/microcontroller-projects/diy-router-using-raspberry-pi" }
];

// Search function
function search() {
    var input = document.querySelector('.search-bar').value.toLowerCase().trim();
    var queries = input.split(' '); // Split input into an array of keywords
    const matchedPages = pages.filter(page => 
        queries.every(query => page.title.toLowerCase().includes(query))
    );

    if (matchedPages.length > 0) {
      window.location.href = matchedPages[0].url;
    } else {
      alert('No match found. Please try different keywords.');
    }
}

// Binding the search function to a button click or enter key press in the search bar
document.querySelector('.search-button').addEventListener('click', search);
document.querySelector('.search-bar').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});
