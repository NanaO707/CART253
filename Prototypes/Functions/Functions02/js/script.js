/**
 * Title of Project
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let catImg;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    createCanvas(1920, 1080);
    catImg = await loadImage('assets/images/3-2-nyan-cat-transparent.png');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0);

    image(catImg, 200, 500);
}