"use strict";
console.log("ello");
/* gsap.to(".ball", { x: 395, duration: 2, rotation: 400 });
gsap.to(".ball", { delay: 2, scale: 0 }); */

let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

tl.to(".ball", { x: 400, duration: 2 });
tl.to(".ball", { rotation: 360, scale: 0 });
tl.to(".ball", { y: -500, x: 1000 });
tl.to(".ball", { scale: 2 });
