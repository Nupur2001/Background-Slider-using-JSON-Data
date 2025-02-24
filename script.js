document.addEventListener("DOMContentLoaded", () => {
  let body = document.body;
  let sliderContainer = document.querySelector(".sliderContainer");
  let leftBtn = document.querySelector(".leftBtn");
  let rightBtn = document.querySelector(".rightBtn");
  let dots = document.querySelector(".dots");

  let slideNumber = 0;

  let slide = [];

  fetch("images.json")
    .then((res) => res.json())
    .then((data) => {
      slide = data.slides;
      console.log(slide);
      slidesLoading();
    });

  function slidesLoading() {
    slide.forEach((slideData) => {
      let slide = document.createElement("div");
      slide.classList.add("slide");

      body.style.backgroundImage = `url(${slideData.url})`;
      slide.style.backgroundImage = `url(${slideData.url})`;
      sliderContainer.appendChild(slide);

      let dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", () => {
        dot.classList.toggle("active");
        console.log(`${slideData.url} was clicked`)
    // dot[slideNumber].classList.toggle('active')

    })
      sliderContainer.appendChild(dot);
      dots.append(dot);
    });
  }
});
