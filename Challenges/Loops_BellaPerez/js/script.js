/**
 * Lines
 * Bella Perez
 * 
 * A series of lines across the canvas
 */

"use strict";

// Step 2: Loop it!
// Convert the challenge code by adding variables and using a while-loop to replace the incredibly repetitive drawing instructions.

// 🌶️ Consider varying some other quality of the lines like their stroke weight, length or even their rotation through the loop as well.

//   Step 3: Going down!
// Now that you have a lovely loop example, add another loop to draw horizontal lines from the left to the right of the canvas.

// 🌶️ What if you keep one end of the lines fixed while the other end changes ?

//   Step 4: Gradient!
// Make the background more interesting by drawing a gradient across it made out of lines.Use a for-loop for this one.
// You’ll probably want to draw the lines very close together(maybe just one pixel apart ?) 
// and you could consider using map() to set their colour relative to their position on the canvas.

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

  background("pink");

  for (let i = 0; i < width; i++) {

    let gradientIndex = map(i, 0, width, 0, 255);

    stroke(240, gradientIndex, 100);
    line(i, 0, i, height);
  }

  let x = 0;
  let strokeColor = 0;

  while (x < width) {
    stroke(strokeColor);
    line(x, 0, x, height);

    x += 50;
    strokeColor += 25;
  }

  let y = 0;

  strokeColor = 0;

  while (y < width) {
    stroke(strokeColor);
    line(0, y, width, y);

    y += 50;
    strokeColor += 25;
  }



}
