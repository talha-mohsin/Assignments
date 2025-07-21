const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1; // slide start
const length = images.length; // creating a variable

const nextSlide = () => {   // creating a function for previous all images one by one
  slider.style.transform = `translateX(-${slideNumber * 770}px)`;
  slideNumber++;
};

const prevSlide = () => {   // creating a function for move all images one by one
  slider.style.transform = `translateX(-${(slideNumber-2) * 770}px)`;
  slideNumber--;
};

const getFirstSlide = () => {   // creating a function for move all images one by one
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {   // creating a function for reverse all images one by one
  slider.style.transform = `translateX(-${(length-1)*800}px)`;
  slideNumber = length;
};

// creating condition for right btn through ternaly operator
right.addEventListener("click", function () {
   slideNumber < length ? nextSlide() : getFirstSlide();
});

// creating condition for left btn through ternaly operator
left.addEventListener("click", function () {
   slideNumber > 1 ? prevSlide() : getLastSlide();
});
