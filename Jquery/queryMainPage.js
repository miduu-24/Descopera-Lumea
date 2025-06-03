$(document).ready(function () {
  let intervalId = null;
  let isPlaying = false;
  let visibleCount = parseInt($("#visibleCount").val());
  let slideHeight = 400;

  // Set the height of the slider based on the number of visible slides
  function updateSliderHeight() {
    visibleCount = parseInt($("#visibleCount").val());
    $(".slider-container").height(visibleCount * slideHeight);
  }

  // Move the first slide to the end of the slider
  function moveSlide() {
    const $first = $(".slide").first();
    $first.appendTo("#sliderInner");
  }

  // Animate the slide transition
  function animateSlide() {
    $("#sliderInner").css("transition", "transform 0.6s ease-in-out");
    $("#sliderInner").css("transform", `translateY(-${slideHeight}px)`);

    setTimeout(() => {
      $("#sliderInner").css("transition", "none");
      $("#sliderInner").css("transform", "translateY(0)");
      moveSlide();
    }, 600);
  }

  // Start the slider with the selected interval
  function startSlider() {
    const delay = parseInt($("#intervalSelect").val());
    intervalId = setInterval(() => {
      animateSlide();
    }, delay);
    $("#playPauseBtn").text("Pause");
    isPlaying = true;
  }

  // Stop the slider
  function stopSlider() {
    clearInterval(intervalId);
    $("#playPauseBtn").text("Play");
    isPlaying = false;
  }

  // Toggle play/pause state of the slider
  function toggleSlider() {
    isPlaying ? stopSlider() : startSlider();
  }

  $("#playPauseBtn").on("click", toggleSlider);

  $("#intervalSelect").on("change", function () {
    if (isPlaying) {
      stopSlider();
      startSlider();
    }
  });


  $("#visibleCount").on("change", function () {
    updateSliderHeight();
  });

  $(".arrow.down").on("click", function () {
    animateSlide();
  });

  // Move the last slide to the beginning of the slider
  $(".arrow.up").on("click", function () {
    const $last = $(".slide").last();
    $last.prependTo("#sliderInner");
    $("#sliderInner").css("transition", "none");
    $("#sliderInner").css("transform", `translateY(-${slideHeight}px)`);
    setTimeout(() => {
      $("#sliderInner").css("transition", "transform 0.6s ease-in-out");
      $("#sliderInner").css("transform", "translateY(0)");
    }, 20);
  });

  updateSliderHeight();
});


//popup
$(document).ready(function () {
  function openPopup(content) {
    $(".popup-body").html(content);
    $(".popup-overlay").fadeIn();
  }

  function closePopup() {
    $(".popup-overlay").fadeOut();
  }

  $(".close-btn").click(closePopup);

  $(".popup-overlay").click(function (e) {
    if (e.target === this) closePopup();
  });
  
// Trigger the popup when an element with class "popup-trigger" is clicked
  $(".popup-trigger").click(function () {
    const type = $(this).data("type");

    if (type === "image") {
      const src = $(this).data("src");
      openPopup(`<img src="${src}" alt="Imagine" />`);
    }
    else if (type === "video") {
      const src = $(this).data("src");
      openPopup(`
        <video controls autoplay>
          <source src="${src}" type="video/mp4" />
          Browserul tău nu suportă video HTML5.
        </video>`);
    }
    else if (type === "text") {
      const text = $(this).data("content");
      openPopup(`<p>${text}</p>`);
    }
  });
});
