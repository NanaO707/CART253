/**
 * A one, one, one, two, three 
 * Bella Perez
 * 
 * Double click on the tap shoes for a little show!
 */

"use strict";

//bg color
let bgColor = '#bfb3e1';

//declaring shoe image
let tapShoeImage;
//array of shoes
let tapShoes = [];

//set tapping automatically to false 
let tapping = false

//first shoe position --> x & y  
let firstShoe = {
    x: 250,
    y: 540,

}

//second shoe position --> x & y 
let secondShoe = {
    x: 500,
    y: 580,

}
/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas, async function setup to load an image, and centers the image. 
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
 * The draw function loops endlessly per p5. It draws the tap shoes using p5 load image with it's position. Also controls the movement for the tap shoes along the x axis.  
*/
function draw() {

    push();
    //setting bg color
    background(bgColor);

    if (tapping === true) {
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
 * This function is dereived from p5 and works every time the user double clicks. Calculates the distance between mouse and the shoes. If it's less than 100 the shoes will move.
*/
function doubleClicked() {

    //calculates how close the double click is near the first shoe image
    if (dist(mouseX, mouseY, firstShoe.x, firstShoe.y) < 100) {

        //tapping is to not tapping so (true) 
        tapping = !tapping;
    }
    //calculates how close the double click is near the second shoe image
    if (dist(mouseX, mouseY, secondShoe.x, secondShoe.y) < 100) {
        //tapping is to not tapping (true)
        tapping = !tapping;
    }



}