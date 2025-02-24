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
    slide.forEach((slider) => {
      slider = document.createElement("div");
      slider.classList.add("slide");
      body.style.backgroundImage = `${slide.url}`;
      console.log(`${slide.url}`);
      sliderContainer.appendChild(slider);

      dotCreation = document.createElement("div");
      dotCreation.classList.add("dot");
      // dots.forEach(dot => {
      //     dot.addEventListener('click',()=>{
      //         dot.classList.toggle('active')
      //     })
      // });
      dotCreation.addEventListener("click", () => {
        dots.classList.toggle("active");
        // console.log("dot is clicked")
      });
      sliderContainer.appendChild(dotCreation);
      dots.append(dotCreation);
    });
  }
});
