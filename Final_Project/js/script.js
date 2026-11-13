// Tap dancing shoes: double-click a shoe to make it tap across the screen
let shoes = [];

function setup() {
  createCanvas(400, 400);
  shoes.push({ x: 100, y: 250, moving: false });
  shoes.push({ x: 180, y: 270, moving: false });
  textAlign(CENTER);
}

function draw() {
  background(240);
  line(0, 300, width, 300); // floor

  for (let i = 0; i < shoes.length; i++) {
    let s = shoes[i];
    let lift = 0;

    if (s.moving) {
      s.x += 2;
      if (s.x > width + 60) s.x = -60;

      // the two shoes take turns stepping
      let up = (frameCount + i * 10) % 20 < 10;
      if (up) lift = -15;
      else text("tap!", s.x, s.y - 30);
    }

    drawShoe(s.x, s.y + lift);
  }
}

function drawShoe(x, y) {
  noStroke();
  fill(20);
  ellipse(x, y, 70, 25);           // body
  rect(x - 35, y - 25, 20, 25);    // ankle
  rect(x - 35, y + 8, 15, 8);      // heel
  fill(180);
  rect(x + 15, y + 11, 18, 4);     // toe tap
  rect(x - 35, y + 16, 15, 3);     // heel tap
  stroke(0);
}

function doubleClicked() {
  for (let s of shoes) {
    if (dist(mouseX, mouseY, s.x, s.y) < 40) {
      s.moving = !s.moving;
    }
  }
}