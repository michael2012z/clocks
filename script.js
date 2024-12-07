function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation degrees
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // 360/12 = 30 degrees per hour
  const minutesDeg = minutes * 6; // 360/60 = 6 degrees per minute
  const secondsDeg = seconds * 6; // 360/60 = 6 degrees per second

  // Rotate the hands
  document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
