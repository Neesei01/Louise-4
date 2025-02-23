// Compte à rebours
const countdownDate = new Date("2024-02-14T00:00:00").getTime(); // Change la date ici

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "C'est le jour J ! 🎉";
  }
}

const interval = setInterval(updateCountdown, 1000);

// Upload de photos
function uploadPhoto() {
  const fileInput = document.getElementById("upload");
  fileInput.click();

  fileInput.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Nouveau Souvenir";
      img.classList.add("photo-grid-item");
      document.querySelector(".photo-grid").appendChild(img);
    };

    reader.readAsDataURL(file);
  };
}
