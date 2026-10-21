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

let tapping = false

let firstShoe = {
    x: 250,
    y: 540,

}


let secondShoe = {
    x: 500,
    y: 580,
    //tapping: false,
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    //create canvas
    createCanvas(1920, 1080);

    //places image in the center of its x & y coordinates 
    imageMode(CENTER);

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

    if (tapping) {
        //move first shoe to the right
        firstShoe.x = firstShoe.x + 4;
        //move second shoe to the right 
        secondShoe.x = secondShoe.x + 4;
    }


    //drawing both shoes
    image(tapShoeImage, firstShoe.x, firstShoe.y);
    image(tapShoeImage, secondShoe.x, secondShoe.y);

    pop();

}

/**
 * OOPS I DIDN'T 
*/
function doubleClicked() {

    //calculates how close the double click is near the first shoe image
    if (dist(mouseX, mouseY, firstShoe.x, firstShoe.y) < 100) {

        tapping = !tapping;
    }
    //calculates how close the double click is near the second shoe image
    if (dist(mouseX, mouseY, secondShoe.x, secondShoe.y) < 100) {

        tapping = !tapping;
    }



}