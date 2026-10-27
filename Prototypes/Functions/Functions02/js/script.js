/**
 * The return of Nyan Cat...
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let catImg;

let catX = 200;
let catY = 500;

let catAngle = Math.PI;

let strokeColors = {
    pink: 'magenta',
    blue: 'blue',

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    createCanvas(1920, 1080);

    imageMode(CENTER);
    catImg = await loadImage('assets/images/3-2-nyan-cat-transparent.png');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0);
    catTracker();

    image(catImg, catX, catY);
}

function drawArc(x, y, w, h, color, lineWeight) {

    // fill('magenta');
    noFill();
    stroke(color);
    strokeWeight(lineWeight);

    arc(x, y, w, h, PI, TWO_PI);

}

function catTracker() {

    //adding arc shapes
    drawArc(1000, 640, 580, 580, strokeColors.pink, 40);
    drawArc(1000, 660, 580, 580, strokeColors.blue, 30);

    catAngle = catAngle + 0.02;

    if (catAngle > TWO_PI) {

        catAngle = PI;

    }

    catX = arcX(catAngle);
    catY = arcY(catAngle);


}

function arcX(angle) {

    return 1000 + 580 / 2 * cos(angle);


}

function arcY(angle) {

    return 640 + 580 / 2 * sin(angle);
}
