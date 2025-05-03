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
    const _hour = _minute * 60;
    const _day = _hour * 24;

    /* STEP 2: Declare any variables you’ll need here
              (e.g. interval id). */




    /* STEP 3: Write an inner `showRemaining()` function:
         • get current time (`new Date()`)
         • figure out the distance to launch
         • if distance <= 0 ⇒ clear interval & show hype msg
         • else break distance into days / hrs / mins / secs
         • pad units to two digits (see hints below)
         • update `document.getElementById(divId).textContent`
    */







}


//let currentDate = new Date().getFullYear();
//let currentTime = Date(currentDate);
let timer = 5;

//console.log("current date: ", currentDate);

//console.log("current timer: ", currentTime);

const timerInterval = setInterval(() => {

    console.log("current timer: ", timer);
    document.getElementById('countdown').innerHTML = timer;

    timer--;

    if (timer < -1) {
        //if (currentTime) {

        clearInterval(timerInterval);

        let img = document.createElement("img");
        img.src = "img/goku-rage.gif";
        img.alt = "SUPER SAYAN GOHAN";


        document.body.appendChild(img);

        img.classList.add('center-gif')

        document.getElementById('countdown').innerHTML = "WARRRAP H! BUY ME A NEW SWITCH PLEASE."





        // class 'launched' is not defined in the css file as well.
        //document.body.classList.add('launched');

        //I couldn't find the play() function in the js file. Also, there wasn't a "confetti.js" when I cloned the repo..
        //document.getElementById('coinSound').play();
    }

}, 1000)















/* STEP 4: Call `showRemaining()` once so the timer
          appears immediately. */


/* STEP 5: Repeat `showRemaining()` every second
          with `setInterval`. */

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
   • Add a confetti explosion (see confetti.js) - Check js in */