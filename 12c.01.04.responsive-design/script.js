"use strict";
document.querySelector(".burgericon").addEventListener("click", addWidth);

function addWidth() {
  document.querySelector("#side-menu").classList.toggle("additionalWidth");
  document.querySelector("#side-menu").classList.toggle("additionalOpacity");
  /*  document
    .querySelector(".welcome")
    .classList.toggle("additionalOpacityWelcome"); */
  /*   document
    .querySelector(".listinggrid")
    .classList.toggle("additionalOpacityWelcome"); */
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
}
