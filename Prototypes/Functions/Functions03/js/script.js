/**
 * Title of Project
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//background color
let bgColor = '#020523';

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    //creates canvas
    createCanvas(900, 900);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //draws bg
    background(bgColor);
    //draws star
    //drawStar(400, 100);

    let x = starDistribution(mouseX, 100);
    let y = starDistribution(mouseY, 60);

    drawStar(x, y);




}

function drawStar(x, y) {
    //no outline
    noStroke();
    //fill color
    fill('#fff6b2');
    //draws star shaped like a diamond
    quad(x, y - 15, x + 10, y, x, y + 15, x - 10, y);


}

function starDistribution(center, range) {

    //returns a random # near the middle
    return center + random(-range, range);

}