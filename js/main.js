function CountDownToMario(endTime, divId) {
  const end = new Date(endTime);

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const pad = n => String(n).padStart(2, '0');
  const div = document.getElementById(divId);

  function showRemaining() {
    const now = new Date();
    const distance = end - now;

    if (distance <= 0) {
      clearInterval(timer);
      div.textContent = "🚀 Switch 2 is out!";
      document.body.classList.add('launched');

      const sound = document.getElementById('coinSound');
      if (sound) sound.play();
      return;
    }

    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    div.textContent = `${days} days ${pad(hours)} hrs ${pad(minutes)} mins ${pad(seconds)} secs`;
  }

  showRemaining();
  const timer = setInterval(showRemaining, 1000);
}

// Call the countdown
CountDownToMario('06/05/2025 12:01 AM', 'countdown');
