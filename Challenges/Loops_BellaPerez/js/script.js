/**
 * Mr. Furious
 * Bella Perez
 * 
 * 
 * A guy who becomes visibly furious!
 * Step 2: Make Mr. Furious turn red over time
He’s getting angrier and angrier, so make him turn more and more red over time.

Maybe you should constrain any numbers you change so they stay in a reasonable range?

Step 3: Make day turn to night
Make the sky (the background) turn from blue to black over time. You’ll need to create a new variable (probably a JavaScript Object called sky?) for this, then change it over time (probably it’ll be a bit like Mr. Furious’ fill?).

Step 4: Add an annoying bird
Add a “bird” to this world that flies across the screen from left to right. Any colour, any speed, any shape you like. Mr. Furious hates birds. This is probably why he’s so angry right now.
 */

"use strict";

let backGroundColor = {
    r:0,
    g:0,
    b:255
}


// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  rage:10,
  // Colour
  fill: {
    r: 255,
    g: 255,
    b: 255
  }

   
};

let bird = {
  // Position and size
  x: 20,
  y: 50,
  size: 30,
  // Colour
  fill: {
    r: 0,
    g: 0,
    b: 255
  }
};



/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(backGroundColor.r, backGroundColor.g, backGroundColor.b);
  backGroundColor.b = backGroundColor.b - 1;
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size,mrFurious.size);

  mrFurious.fill.g = mrFurious.fill.g -.5;
  mrFurious.fill.b = mrFurious.fill.b -.5;

  mrFurious.x = mrFurious.x + random(10, -10);
  mrFurious.y = mrFurious.y + random(10, -10);

  mrFurious.y = mrFurious.y -.2;
  


  fill("yellow");
  ellipse(bird.x,bird.y,bird.size,bird.size);
  bird.x = bird.x + 1;
  bird.x = constrain(bird.x,0,370);

 


    pop();
  


}