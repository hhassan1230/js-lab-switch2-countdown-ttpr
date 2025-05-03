/********************************************************
 * Switch 2 Countdown — completed version with comments
 ********************************************************/

// Kick off the countdown by calling the function
// Pass in:
// 1. A string representing the target date and time
// 2. The ID of the HTML element where the countdown should display
CountDownToMario('06/05/2025 12:01 AM', 'countdown');

/**
 * Builds and starts a countdown timer that updates every second
 * @param {string|Date} endTime - The date/time when the countdown should end
 * @param {string} divId - The ID of the HTML element to update
 */
function CountDownToMario(endTime, divId) {
  // Convert the endTime string into a Date object so we can do math with it
  const end = new Date(endTime);

  // Define constants representing time in milliseconds
  const _second = 1000;                   // 1000 ms = 1 second
  const _minute = _second * 60;           // 60 seconds = 1 minute
  const _hour   = _minute * 60;           // 60 minutes = 1 hour
  const _day    = _hour * 24;             // 24 hours = 1 day

  // Cache (store) a reference to the DOM element so we can update it easily
  const div = document.getElementById(divId);

  // Variable to hold the interval ID returned by setInterval()
  let timer;

  // Optional helper function to pad single digits with a leading 0
  // Example: 4 becomes "04", 12 stays "12"
  const pad = n => String(n).padStart(2, '0');

  // This inner function will calculate and show the time remaining
  function showRemaining() {
    const now = new Date();          // Get the current time
    const distance = end - now;      // Calculate the time left (in milliseconds)

    // If time is up or past, trigger the launch state
    if (distance <= 0) {
      clearInterval(timer);          // Stop the countdown loop
      div.textContent = "It's Mario time!"; // Replace countdown with final message

      // Optional launch celebration: style the page and play a sound
      document.body.classList.add('launched'); // Add class to body for CSS effects
      const sound = document.getElementById('coinSound');
      if (sound) sound.play();       // Play coin sound if it exists
      return;                        // Exit the function early
    }

    // Break the remaining time into days/hours/minutes/seconds
    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    // Format the countdown string (e.g., "01:04:23:09")
    const countdownText = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Update the text content of the countdown div
    div.textContent = countdownText;
  }

  // Show the countdown immediately before the first second passes
  showRemaining();

  // Run showRemaining() every 1 second (1000 ms) to update the timer
  timer = setInterval(showRemaining, 1000);
}