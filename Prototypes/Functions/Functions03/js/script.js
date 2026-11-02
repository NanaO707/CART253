/**
 * Flickering Nightly Stars
 * Bella Perez
 * 
 * Move your mouse along the canvas to flicker the stars in the night. The stars flickering may vary... Random spots and curious distributions.
 * 
 */

"use strict";

//background color
let bgColor = '#020523';

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas.
*/
function setup() {
    //creates canvas
    createCanvas(900, 900);

}


/**
 * For the draw function it loops to call starDistribution function with its center and range. 
 * Calls draw star to draw it based on the starDistribution parameters. It sets bg to the night sky.
*/
function draw() {

    //draws bg
    background(bgColor);

    //chooses a random area near the mouse for its x & y based on the given range
    let x = starDistribution(mouseX, 100);
    let y = starDistribution(mouseY, 60);
    //draws star
    drawStar(x, y);
}

/**
 * For the drawStar function it takes x & y for the star's position. 
 * Draws the star using a quad to create a diamond-shape.
 * 
*/
function drawStar(x, y) {

    //no outline
    noStroke();
    //fill color
    fill('#fff6b2');
    //draws star shaped like a diamond
    quad(x, y - 15, x + 10, y, x, y + 15, x - 10, y);


}

/**
 * The starDistribution function takes a center(the middle) and a range(how far and wide it distributes).
 * Returns a random number close to the middle.
 * 
*/
function starDistribution(center, range) {

    //returns a random # near the middle
    return center + random(-range, range);

}