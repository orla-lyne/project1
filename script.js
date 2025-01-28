// Function to fetch a random joke
function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())  // Parse response as JSON
      .then(data => {
        // Display the joke inside the joke-container div
        document.getElementById('joke-container').innerHTML = data.value;
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        // Display error message if fetching fails
        document.getElementById('joke-container').innerHTML = 'Sorry, there was an error fetching the joke.';
      });
}

// Optional: Fetch a joke as soon as the page loads
window.onload = fetchJoke;
