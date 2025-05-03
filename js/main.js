CountDownToMario('ignored', 'countdown');

function CountDownToMario(_ignored, divId) {
  const div = document.getElementById(divId);
  const end = new Date(div.dataset.release); 

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      clearInterval(timer);
      div.textContent = "Switch 2 is out! 🎉";
      document.body.classList.add('launched');
      const sound = document.getElementById('coinSound');
      if (sound) sound.play();
      return;
    }

    const seconds = pad(Math.floor((timeLeft / 1000) % 60));
    const minutes = pad(Math.floor((timeLeft / (1000 * 60)) % 60));
    const hours = pad(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
    const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

    
    div.textContent = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}
