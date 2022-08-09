let bubbles = [];
let randomList = {};
let colorsObj;

function createBubbles() {
  for (let i = 0; i < bubblesSlider.value; i++) {
    bubbles.push(new Bubble());
  }
}

function drawBubbles(log) {
  var red = parseInt(document.getElementById('red').value);
  var green = parseInt(document.getElementById('green').value);
  var blue = parseInt(document.getElementById('blue').value);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(speedSlider.value);
    if (isChecked.checked === true) {
      colorsObj = null;
    } else {
      colorsObj = { red, green, blue }
    }
    bubbles[i].show(colorsObj);
    log === true ? console.log(bubbles[i]) : null;
  }
}


function setup() {
  createCanvas(600, 400);
  createBubbles();
  let difference;
  setInterval(() => {
    difference = bubblesSlider.value - bubbles.length
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        bubbles.push(new Bubble());
      }
    } else if (bubbles === 0) {
      return;
    } else {
      for (let i = 0; i < -difference; i++) {
        bubbles.pop()
      }
    }
  }, 1000);
}

function draw() {
  background(0);
  drawBubbles();
}