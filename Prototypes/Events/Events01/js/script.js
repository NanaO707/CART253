/**
 * A one, one, one, two, three 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//bg color
let bgColor = '#bfb3e1';

//declaring shoe image
let tapShoeImage;
//array of shoes
let tapShoes = [];

let firstShoe = {
    x: 250,
    y: 540,
    tapping: false,
}

let secondShoe = {
    x: 500,
    y: 580,
    tapping: false,
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    //create canvas
    createCanvas(900, 900);
    //Loading the tap shoe image referencing p5 loadImage. 
    tapShoeImage = await loadImage('assets/images/tap-shoes-silhouette-19-removebg-preview.png');

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();
    //setting bg color
    background(bgColor);

    //move first shoe to the right
    firstShoe.x = firstShoe.x + 4;
    //move second shoe to the right 
    secondShoe.x = secondShoe.x + 4;

    //drawing both shoes
    image(tapShoeImage, firstShoe.x, firstShoe.y);
    image(tapShoeImage, secondShoe.x, secondShoe.y);

    pop();

}