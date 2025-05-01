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
CountDownToMario('06/05/2025 12:01 AM', 'countdown');

function CountDownToMario(endTime, divId) {
  const end = new Date(endTime);

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const div = document.getElementById(divId);
  const pad = n => String(n).padStart(2, '0');
  let timer;

  function showRemaining() {
    const now = new Date();
    const distance = end - now;

    if (distance <= 0) {
      clearInterval(timer);
      div.textContent = "🎉 It's-a me, Mario! 🎉";

      // Add celebration styles
      document.body.classList.add('launched');

      // Play coin sound if available
      const sound = document.getElementById('coinSound');
      if (sound) sound.play();

      // Launch confetti
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      }

      return;
    }

    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    div.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }

  showRemaining(); // Show immediately
  timer = setInterval(showRemaining, 1000); // Repeat every second
}