/**
 * The return of Nyan Cat...
 * Bella Perez
 * 
 * Watch nyan cat fly along a blue and magenta rainbow!
 */

"use strict";

//nyan cat img
let catImg;

//cat img x & y values
let catX = 200;
let catY = 500;

//starting point is left of the arc
let catAngle = Math.PI;

//arc colors 
let strokeColors = {
    pink: 'magenta',
    blue: 'blue',

}

/**
 * The setup function is used as a base in p5 and will only run once. 
 * Contains creating a canvas and async function setup to load an image in reference to p5. 
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //center image coordinates
    imageMode(CENTER);
    //load image
    catImg = await loadImage('assets/images/3-2-nyan-cat-transparent.png');
}


/**
 * For the draw function, I used p5's respective resources for image syntax.
 * Loops to call catTracker function, draw cat image, and sets bg to black.
*/
function draw() {

    //set bg to black
    background(0);
    //calls cat tracker
    catTracker();

    //draws cat image
    image(catImg, catX, catY);
}
/**
 * For the drawArc function, I used p5's respective resources for arcs.
 * Draws an arc with parameters for x, y, w, h, color, and lineWeight.
*/
function drawArc(x, y, w, h, color, lineWeight) {

    //no fill
    noFill();
    //parameter for the arc color
    stroke(color);

    //parameter for the lineWeight
    strokeWeight(lineWeight);

    //parameter for x,y,w,h of the arc and draws half a circle
    arc(x, y, w, h, PI, TWO_PI);

}
/**
 * For the catTracker function, I used p5's respective resources for arcs.
 * Draws the arcs with its values based on the draw arcs parameters for x, y, w, h, color, and lineWeight.
 * Tracks the cat's position on the arc.
 * 
 * 
*/
function catTracker() {

    //adding arc shapes
    drawArc(1000, 640, 580, 580, strokeColors.pink, 40);
    drawArc(1000, 660, 580, 580, strokeColors.blue, 30);

    //cat movement speed
    catAngle = catAngle + 0.02;

    //if the cat is more than half a circle make it equal to pi so the cat travels within range
    if (catAngle > TWO_PI) {

        catAngle = PI;

    }

    //return values from each function update the position of the cat.
    catX = arcX(catAngle);
    catY = arcY(catAngle);
}

/**
 * For the arcX function, I used p5's respective resources for arcs.
 * returns with parameters for angle for x using cos
*/
function arcX(angle) {

    //returns the x point of the arc using triangle math for the unit circle
    return 1000 + 580 / 2 * cos(angle);


}
/**
 * For the arcY function, I used p5's respective resources for arcs.
 * returns with parameters for angle for y using sin
*/
function arcY(angle) {

    //returns the y point of the arc using triangle math for the unit circle.
    return 640 + 580 / 2 * sin(angle);
}
