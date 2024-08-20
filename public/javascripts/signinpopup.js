function showPopup() {
  document.getElementById("signup-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.classList.add('blur'); // Add blur to the background
}

function closePopup() {
  document.getElementById("signup-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove('blur'); // Remove blur from the background
}

// Trigger the popup every 10 seconds
setInterval(function() {
  showPopup();
}, 10000); // 10 seconds = 10000 ms
