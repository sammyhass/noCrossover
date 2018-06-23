class Circle {
  constructor (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  show () {
    fill(this.red, this.green, this.blue);
    noStroke();
    ellipse(this.x, this.y, this.radius*2);

  }
}
