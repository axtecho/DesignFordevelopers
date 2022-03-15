"use strict";

const button = document.querySelector("#togglebutton");

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

/* console.log(useDark.matches);
 */
toggleDarkMode(useDark.matches);
function toggleDarkMode(state) {
  console.log("Dark mode activated");
  console.log(state);

  document.documentElement.classList.toggle("dark-mode", state);
}

useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  console.log("overridden");
});

if (useDark.matches) {
  button.checked = true;
  /*   console.log("The button has been activated");
   */
}

// I HAVE YET TO MAKE PERSISTEN USER CHOICE MODE
// https://www.ditdot.hr/en/dark-mode-website-tutorial
