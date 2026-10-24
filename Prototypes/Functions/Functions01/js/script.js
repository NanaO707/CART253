/**
 * Cute Lampy 
 * Bella Perez
 * 
 * Double click on the screen to turn on Lampy's light and increase their resolution and vice versa.
 * 
 */

"use strict";

//variable for lamp static image
let lampImg;

//variable for lamp gif
let lampGif;

//check whether the light is on or off (bool)
let lampOn = false;

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load an image in reference to p5. 
*/
async function setup() {

    //creating a canvas
    createCanvas(900, 900);

    //center image coordinates 
    imageMode(CENTER);

    //loads gif
    lampGif = await loadImage('assets/images/lamp-anim.gif');

    //loads image
    lampImg = await loadImage('assets/images/lamp.png');
}

/**
 * For the draw function, I used p5's respective resources for loadImage syntax. Loops to call lampChange function and sets bg to black.
*/
function draw() {

    //bg set to black
    background(0);

    //calls lampChange function
    lampChange();
}

/**
 * Function that conatins the parameters to draw the lamp gif and static image.
*/
function drawLamp(img, x, y, w, h) {

    //image parameters 
    image(img, x, y, w, h);
}

/**
 * Function that conatins lampChange.It draws the gif if lamp is set to true. Otherwise, the lamp image is drawn.
*/
function lampChange() {

    //if lamp is on draw the gif
    if (lampOn) {

        //draws the lamp gif
        drawLamp(lampGif, 450, 450, 400, 400);
    }

    //else draw the lamp static image 
    else {
        //draws the lamp image
        drawLamp(lampImg, 450, 450, 400, 400);
    }
}

/**
 * Function that is built into p5. Runs everytime the user double clicks. Sets lampOn to the opposite on double click. Changes which image gets drawn.
*/
function doubleClicked() {

    //sets lampOn to the opposite on double click
    lampOn = !lampOn;

}

