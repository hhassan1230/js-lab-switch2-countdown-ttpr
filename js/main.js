/********************************************************
 * Switch 2 Countdown — starter file (solution removed)
 * -----------------------------------------------------
 * Fill in the blanks to build a live countdown that
 * flips to a hype message once the clock hits zero.
 *
 * ✨  What’s here:
 *   • Constants for time math (ms/second, ms/minute…)
 *   • Step-by-step “TODO” comments as your guide
 *   • Handy hints at the bottom (padding, sound, etc.)
 *
 * 🛠  Your job:
 *   1. Calculate the remaining time each second.
 *   2. Update the DOM with days / hrs / mins / secs.
 *   3. Handle launch-day state (text swap, style swap,
 *      coin-sound, confetti… go wild!).
 ********************************************************/

/* ------------------------------------------------------
   Kick off the countdown (edit date while testing).
   The second argument is the id of the element that
   will display the timer.
------------------------------------------------------ */

/**
 *  Builds a self-updating countdown.
 *  @param {string|Date} endTime – Launch deadline.
 *  @param {string}       divId  – id of the DOM node for text.
 */
function CountDownToMario(endTime, divId) {
  /* STEP 1: Convert deadline into a Date object. */
  const end = new Date("September 30, 2025 12:01 AM");

  /* 👉 Time constants (leave these as-is): */
  const _second = 1000;
  const _minute = _second * 60;
  const _hour   = _minute * 60;
  const _day    = _hour * 24;

  /* STEP 2: Declare any variables you’ll need here
    */
   let now = new Date().getTime();
    
  /* STEP 3: Write an inner `showRemaining()` function:
       • get current time (`new Date()`)
       • figure out the distance to launch
       • if distance <= 0 ⇒ clear interval & show hype msg
       • else break distance into days / hrs / mins / secs
       • pad units to two digits (see hints below)
       • update `document.getElementById(divId).textContent`
  */
 function showRemaining() {
    let now = new Date().getTime();
    const distance = end - now;
    if (distance <= 0) {
        clearInterval(timer)
        document.getElementById(divId).textContent = "Hype Time!";
    } 
    else {
        const days = Math.floor(distance / _day);
        const hours = Math.floor(distance % _day / _hour);
        const minutes = Math.floor(distance % _hour / _minute);
        const seconds = Math.floor(distance % _minute / _second);
        const pad = n => String(n).padStart(2, '0');
        document.getElementById(divId).textContent = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    }
}
showRemaining();
  /* STEP 4: Call `showRemaining()` once so the timer
            appears immediately. */
setInterval(showRemaining, _second);
  /* STEP 5: Repeat `showRemaining()` every second
            with `setInterval`. */
}
CountDownToMario('06/05/2025 12:01 AM', 'countdown');