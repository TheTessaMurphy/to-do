

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
function makeConfetti(element) {
  var rect = element.getBoundingClientRect();
  var originX = (rect.x + (0.5 * rect.width)) / width;
  var originY =  (rect.y + (0.5 * rect.height)) / height;

  fireConfetti(originX, originY);
}

function fireConfetti(x, y) {
 
	confetti({
    startVelocity: 10,
    scalar: .5,
    angle: 30,//randomInRange(1, 1),
    //spread: randomInRange(50, 70),
    particleCount: 50,
    origin: {
      x: x,
      y: y,
    }
  });
  
}


