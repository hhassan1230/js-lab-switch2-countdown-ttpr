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
    const end = new Date(endTime);
    const _second = 1000;
    const _minute = _second * 60;
    const _hour   = _minute * 60;
    const _day    = _hour * 24;

    function showRemaining(){
        const now = new Date(); //variable for the current date
        const distance = end - now; //variable distance finds the difference between current time and launch date
        if (distance <=0){ //if the distance is 0, the switch has already been released
            clearInterval(timer); //since the distance is 0, we no longer need the timer which displays the remaining time
            document.getElementById(divId).innerHTML="The Switch 2 is out!"; //display release message
        }
        else{
            const days = Math.floor(distance/_day); //finds the dividend of distance and days
            const hours = Math.floor((distance%_day)/_hour); //takes distance/day and finds the remainder instead of the dividend and then divides it by the number of hours
            const minutes = Math.floor((distance%_hour)/_minute); //takes distance/hour and finds the remainder instead of the divident and then divides it by the number of minutes
            const seconds = Math.floor((distance%_minute)/_second); //takes distance/minute and finds the remainder instead of the divident and then divides it by the number of seconds
            document.getElementById(divId).innerHTML = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`; //displays the total remaining time in a string
        }
    }

    const timer=setInterval(()=>{ //variable that updates on an interval
        showRemaining(); //runs the function per interval
    }, _second); //sets the interval to be the same as a second in real time
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
   • Add a confetti explosion (see confetti.js) - Check js in */