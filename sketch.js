let slider;

function newCircles (maxCircles) {
  circles = [];
  background(255);
  while (circles.length < maxCircles) {
    let thisCircle = new Circle(random(width), random(height), random(100));

    let badApple = false;
    for (let i = 0; i < circles.length; i++) {
      let distance = dist(thisCircle.x, thisCircle.y, circles[i].x, circles[i].y);
      if (distance < thisCircle.radius + circles[i].radius) {
        badApple = true;
      }
    }
    if (!badApple) {
      circles.push(thisCircle);
    }
  }

  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  return circles;
}

function setup () {
  createCanvas(800,600);
  newCircles(25);
  slider = createSlider(25, 500, 25, 25);
  slider.position(20, 75);

}

let sliderVal = 25;
function draw () {
  if (sliderVal !== slider.value()) {
    newCircles(slider.value());
    sliderVal = slider.value();
  }
}
