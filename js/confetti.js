

let width = window.innerWidth;
let height = window.innerHeight

window.addEventListener('resize',() => {
  width = window.innerWidth;
  height = window.innerHeight;
});

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Fires on button click
function nowItsAParty(element) {
 
  var rect = element.getBoundingClientRect();
  console.log(rect);

  var originX = (rect.x + (0.5 * rect.width)) / width;
  var originY = (rect.y + (0.5 * rect.height)) / height;

  console.log("Y Coordinate: " + rect.y);
  console.log("Height of screen: " + height);
  console.log("Ratio: " + originY);

  fireConfetti(originX, originY);
}

function fireConfetti(x, y) {
 
	confetti({
    startVelocity: 10,
    scalar: .3,
    angle: 30,//randomInRange(1, 1),
    spread: randomInRange(50, 70),
    particleCount: 50,
    origin: {
      x: x,
      y: y,
    }
  });
}


