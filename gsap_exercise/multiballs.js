"use strict";

gsap.to(".ball", {
  y: -200,
  duration: 0.5,
  stagger: 0.5,
  repeat: Infinity,
  yoyo: true,
  ease: "power1.out",
  each: 0.2,
});
