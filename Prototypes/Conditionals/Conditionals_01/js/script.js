/**
 * What's under my bed :p 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//making bg color black 
let bgColor = (0);

// declaring single bed image
let bedImage;

//bedImage maximum count 
const bedAmount = 3;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //Loading the bed image referncing p5 loadImage 
    bedImage = await loadImage('assets/images/spooky-bed-removebg-preview.png');



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();

    background(0);

    //draw image and position 
    image(bedImage, 750, 540);

    pop();

}