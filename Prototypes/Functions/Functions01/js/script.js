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

//check whether the light in on or off(bool)
let lampOn = false;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //creating a canvas
    createCanvas(900, 900);

    imageMode(CENTER);

    lampGif = await loadImage('assets/images/lamp-anim.gif');

    lampImg = await loadImage('assets/images/lamp.png');

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //bg set to black
    background(0);

    //call lamp change function
    lampChange();
}

function drawLamp(img, x, y, w, h) {

    image(img, x, y, w, h);
}

function lampChange() {

    if (lampOn) {

        drawLamp(lampGif, 450, 450, 400, 400);

    }

    else {

        drawLamp(lampImg, 450, 450, 400, 400);


    }

}

function doubleClicked() {

    lampOn = !lampOn;

}

