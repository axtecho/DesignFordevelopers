"use strict";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

tl.to("#the_div", {
  x: 800,
  duration: 2,
  scrollTrigger: {
    trigger: "#the_div",
    scrub: 0.5,
    markers: true,
    start: "top 75%",
    end: "bottom 25%",
    pin: true,
  },
});
