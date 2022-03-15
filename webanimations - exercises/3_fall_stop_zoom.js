"use strict";

const ball = document.querySelector("#ball");
const stage = document.querySelector("#stage");

const rectStage = stage.getBoundingClientRect();
const rectBall = ball.getBoundingClientRect();

const centerX = rectStage.width / 2 - rectBall.width / 2;
const rightX = rectStage.width - rectBall.width;
const centerY = rectStage.height / 2 - rectBall.height / 2;
const bottomY = rectStage.height - rectBall.height;
/* console.log(centerX); */
console.log(rectBall);

// Create keyframes and properties for falling and zoom
const propFall = {
  duration: 8000,
  iterations: Infinity,
  direction: "normal",
  /*   easing: "ease-in-out",
   */
};
const propZoom = {
  duration: 1500,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
  composite: "add",
};
/* const keyframes = [
  { transform: "translate(0,-20vw)" },
  {
    transform: "translate(0, 65vw)",
  },
]; */
const keyframes = [
  {
    transform: `translate( ${centerX}px, 0vw)`,
    opacity: 0.2,
  },
  {
    transform: `translate(${rightX}px, ${centerY}px)`,
    opacity: 0.8,
  },
  {
    transform: `translate(${centerX}px, ${bottomY}px)`,
    opacity: 0.2,
  },
  {
    transform: `translate(0vw, ${centerY}px)`,
    opacity: 1,
  },
  { transform: `translate(${centerX}px,0vw)` },
];
const zoomKeyFrames = [{ transform: `scale(1)` }, { transform: `scale(2)` }];
const animation = ball.animate(keyframes, propFall);
// register click
ball.addEventListener("click", ballClicked);

// start falling animation

function ballClicked() {
  animation.pause();
  console.log("Ball clicked!");

  // pause falling animation

  // start zoom-animation
  zoomIt();
}

function zoomIt() {
  const animationZoom = ball.animate(zoomKeyFrames, propZoom);
  animationZoom.onfinish = function () {
    console.log(rectBall);

    animation.play();
  };
}
