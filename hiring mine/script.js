// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const slider = document.querySelector(".slider");
// const images = document.querySelectorAll(".box_carousel");

// let slideNumber = 1; // slide start
// const length = images.length; // creating a variable

// const nextSlide = () => {   // creating a function for previous all images one by one
//   slider.style.transform = `translateX(-${slideNumber * 380}px)`;
//   slideNumber++;
// };

// const prevSlide = () => {   // creating a function for move all images one by one
//   slider.style.transform = `translateX(-${(slideNumber-2) * 380}px)`;
//   slideNumber--;
// };

// const getFirstSlide = () => {   // creating a function for move all images one by one
//   slider.style.transform = `translateX(0px)`;
//   slideNumber = 1;
// };
// const getLastSlide = () => {   // creating a function for reverse all images one by one
//   slider.style.transform = `translateX(-${(length-1)*800}px)`;
//   slideNumber = length;
// };

// // creating condition for right btn through ternaly operator
// right.addEventListener("click", function () {
//    slideNumber < length ? nextSlide() : getFirstSlide();
// });

// // creating condition for left btn through ternaly operator
// left.addEventListener("click", function () {
//    slideNumber > 1 ? prevSlide() : getLastSlide();
// });





const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".box_carousel");
    
let slideNumber = 0;
const totalSlides = images.length;
const slideWidth = 380; // box_carousel width + gap

const goToSlide = (index) => {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
};

const nextSlide = () => {
  slideNumber = (slideNumber + 1) % totalSlides;
  goToSlide(slideNumber);
};

const prevSlide = () => {
  slideNumber = (slideNumber - 1 + totalSlides) % totalSlides;
  goToSlide(slideNumber);
};

// Manual navigation
right.addEventListener("click", () => {
  nextSlide();
  resetAutoplay(); // pause and restart autoplay
});

left.addEventListener("click", () => {
  prevSlide();
  resetAutoplay(); // pause and restart autoplay
});

// Autoplay setup
let autoplayInterval = setInterval(nextSlide, 1000);

// Pause autoplay temporarily on interaction
const resetAutoplay = () => {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 1000);
};



// Pause on hover
images.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval); // stop autoplay
  });

  box.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 1000); // resume autoplay
  });
});