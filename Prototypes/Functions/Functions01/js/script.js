/**
 * Cute Lampy 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let lampImg;

let lampGif;

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

    drawLamp(lampGif, 450, 450, 400, 400);
    drawLamp(lampImg, 450, 450, 400, 400);


}

function drawLamp(img, x, y, w, h) {

    image(img, x, y, w, h);
}


function doubleClicked() {

    lampOn = !lampOn;

}

