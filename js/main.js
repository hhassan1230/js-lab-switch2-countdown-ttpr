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

/**
 *  Builds a self-updating countdown.
 *  @param {string|Date} endTime – Launch deadline.
 *  @param {string}       divId  – id of the DOM node for text.
 */
function CountDownToMario(endTime, divId) {
  /* STEP 1: Convert deadline into a Date object. */
  const end = new Date(endTime);

  /* 👉 Time constants (leave these as-is): */
  const _second = 1000;
  const _minute = _second * 60;
  const _hour   = _minute * 60;
  const _day    = _hour * 24;

  /* STEP 2: Declare any variables you’ll need here
            (e.g. interval id). */

            const div = document.getElementById(divId);

            // Optional: Read date from data-release attribute (Requirement #4)
            const target = div.dataset.release ? new Date(div.dataset.release) : end;
          
            // Two-digit padding helper (Requirement #2)
            const pad = (n) => String(n).padStart(2, '0');
          

  /* STEP 3: Write an inner `showRemaining()` function:
       • get current time (`new Date()`)
       • figure out the distance to launch
       • if distance <= 0 ⇒ clear interval & show hype msg
       • else break distance into days / hrs / mins / secs
       • pad units to two digits (see hints below)
       • update `document.getElementById(divId).textContent`
  */

       function showRemaining() {
        const now = new Date();
        const distance = target - now;
    
        if (distance <= 0) {
          // Countdown finished!
    
          clearInterval(timer); // stop timer loop
    
          // STEP 3a: Flip to launch message (Requirement #3)
          div.textContent = "Switch 2 is out! 🎉";

    
          // STEP 3b: Add launched class for style change
          document.body.classList.add('launched');
    
          // STEP 3c: Optional — Play sound (Requirement #5)
          const sound = document.getElementById('coinSound');
          if (sound) sound.play();
    
          // STEP 3d: Optional — Confetti 🎊
          if (typeof confetti === 'function') confetti();
    
          return;
        }
    
        // STEP 3e: Breakdown time
        const days = pad(Math.floor(distance / _day));
        const hours = pad(Math.floor((distance % _day) / _hour));
        const minutes = pad(Math.floor((distance % _hour) / _minute));
        const seconds = pad(Math.floor((distance % _minute) / _second));
    
        // STEP 3f: Update countdown text (Requirement #1)
        div.textContent = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
      }

  /* STEP 4: Call `showRemaining()` once so the timer
            appears immediately. */
            showRemaining();

  /* STEP 5: Repeat `showRemaining()` every second
            with `setInterval`. */
            const timer = setInterval(showRemaining, 1000);
}

/* ======================================================
   📌  HINTS  — uncomment / tweak as you implement
   ------------------------------------------------------
   • Two-digit padding helper
       // const pad = n => String(n).padStart(2, '0');

   • Read release date from HTML
       // const div    = document.getElementById(divId);
       // const target = new Date(div.dataset.release);

   • Celebration styles
       // document.body.classList.add('launched');

   • Play sound once
       // document.getElementById('coinSound').play();
====================================================== */
/* ======================================================
   🎉  BONUS  — optional extras
   ------------------------------------------------------
   • Add a confetti explosion (see confetti.js) - Check js in 