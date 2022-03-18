"use strict";
let h3 = document.querySelector("section h3").innerHTML;

window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  document.querySelector("section h3").innerHTML = spanWrapper(h3);

  let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

  tl.from("span", {
    y: 700,
    opacity: 0,
    duration: 1,
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: "#the_div",
      scrub: 0.5,
      markers: true,
      start: "top 65%",
      end: "bottom 45%",
      pin: true,
    },
  });
}

function spanWrapper(text) {
  let words = text.split(" ");
  words.forEach((element, i, arr) => {
    arr[i] = `<span>${element}</span>`;
  });
  return words.join(" ");
}

/* function spanWrapper(word) {
  let wordArr = word.split(" ").map((word) => {
    return `<span>${word}</span>`;
  });
  return wordArr.join(" ");
}
 */
