/**
 * Skeleton melodies 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let skullImage;
let armImage;
let ribCageImage;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(900, 900);

    skullImage = await loadImage('assets/images/ingameCage.png');
    armImage = await loadImage('assets/images/ingameHand.png');
    ribCageImage = await loadImage('assets/images/ingameCage.png');


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //add background color
    background('black');

    //draws the images of a skull, ribcage, and arm.
    image(skullImage, 25, 125);
    image(armImage, 25, 125);
    image(ribCageImage, 25, 125);


}