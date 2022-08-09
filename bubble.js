class Bubble {
  constructor() {
    this.x = random(50, 550);
    this.y = random(50, 350);
    this.r = random(20, 40);
    this.randColor = {
      red: random(0, 255),
      green: random(0, 255),
      blue: random(0, 255)
    }
  }

  get() {
    return { x: this.x, y: this.y, size: this.size }
  }

  move(speed) {
    this.x = constrain(this.x + random(-speed, speed), 0, 600);
    this.y = constrain(this.y + random(-speed, speed), 0, 400);
  }

  show(color, noFillBool) {
    if (noFillBool || noFillBool === true) {
      noFill();
      strokeWeight(4);
    } else {
      if (color) {
        stroke(color.red, color.green, color.blue);
        fill(color.red, color.green, color.blue, 80);
        strokeWeight(2);
      } else {
        stroke(this.randColor.red, this.randColor.green, this.randColor.blue);
        fill(this.randColor.red, this.randColor.green, this.randColor.blue, 80);
        strokeWeight(2);
      }
    }
    ellipse(this.x, this.y, this.r);
  }
}