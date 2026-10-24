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

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    createCanvas(900, 900);

    imageMode(CENTER);

    lampGif = await loadImage('assets/images/lamp-anim.gif');

    lampImg = await loadImage('assets/images/lamp.png');



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    image(lampGif, 450, 450);
    image(lampImg, 450, 450, 64 * 6, 64 * 6);

}