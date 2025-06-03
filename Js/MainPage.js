const items = document.querySelectorAll("#myList .item");
let currentIndex = 0;
const intervalSeconds = 3;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
  clearInterval(interval);
  interval = setInterval(nextItem, intervalSeconds * 1000);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
  clearInterval(interval);
  interval = setInterval(nextItem, intervalSeconds * 1000);
}

interval = setInterval(nextItem, intervalSeconds * 1000);

document.addEventListener("DOMContentLoaded", () => {
  const ImageSlider = (() => {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const largeImage = document.querySelector(".large-image-container");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const repeatCheckbox = document.getElementById("repeatCheckbox");
    const intervalSelect = document.getElementById("intervalSelect");

    const imageUrls = ["../Photos/1.jpg", "../Photos/2.jpg", "../Photos/3.jpg"];

    let currentIndex = 0;
    let intervalId = null;
    let isPlaying = false;

    function showImage(index) {
      largeImage.style.backgroundImage = `url('${imageUrls[index]}')`;
    }

    function nextImage() {
      currentIndex++;
      if (currentIndex >= imageUrls.length) {
        if (repeatCheckbox.checked) {
          currentIndex = 0;
        } else {
          stopSlideshow();
          return;
        }
      }
      showImage(currentIndex);
    }

    function startSlideshow() {
      const delay = parseInt(intervalSelect.value);
      intervalId = setInterval(nextImage, delay);
      playPauseBtn.textContent = "Pause";
      isPlaying = true;
    }

    function stopSlideshow() {
      clearInterval(intervalId);
      playPauseBtn.textContent = "Play";
      isPlaying = false;
    }

    function togglePlayPause() {
      isPlaying ? stopSlideshow() : startSlideshow();
    }

    function updateInterval() {
      if (isPlaying) {
        stopSlideshow();
        startSlideshow();
      }
    }

    function handleHover(index) {
      showImage(index);
      currentIndex = index;
    }

    playPauseBtn?.addEventListener("click", togglePlayPause);
    intervalSelect?.addEventListener("change", updateInterval);
    thumbnails?.forEach((thumb, i) => {
      thumb.addEventListener("mouseenter", () => handleHover(i));
    });
  })();
});
