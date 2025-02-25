document.addEventListener("DOMContentLoaded", () => {
  let body = document.body;
  let sliderContainer = document.querySelector(".sliderContainer");
  let leftBtn = document.querySelector(".leftBtn");
  let rightBtn = document.querySelector(".rightBtn");
  let dotContainer = document.querySelector(".dots");
  let slideNumber = 0;
  let slides = [];
  fetch("images.json")
    .then((res) => res.json())
    .then((data) => {
      slides = data.slides;
      slidesLoading();
      updateSlide();
    });
  function slidesLoading() {
    dotContainer.innerHTML = "";
    slides.forEach((slide, index) => {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      dot.dataset.index = index;
      dot.addEventListener("click", () => {
        changeSlide(index);
      });
      dotContainer.appendChild(dot);
    });
  }
  function changeSlide(index) {
    slideNumber = index;
    updateSlide();
  }
  function updateSlide() {
    if (slides.length === 0) return;
    body.style.backgroundImage = `url(${slides[slideNumber].url})`;
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideNumber);
    });
  }
  leftBtn.addEventListener("click", () => {
    slideNumber = (slideNumber - 1 + slides.length) % slides.length;
    console.log(slideNumber)
    updateSlide();
  });
  rightBtn.addEventListener("click", () => {
    slideNumber = (slideNumber + 1) % slides.length;
    console.log(slideNumber)
    updateSlide();
  });
});
