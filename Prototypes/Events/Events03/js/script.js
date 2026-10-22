/**
 * Skeleton melodies 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//image variables for different skele parts
let skullImage;
let armImage;
let ribCageImage;

//checks if the skele parts are playing
let skullOn = false;
let armOn = false;
let ribCageOn = false;

//tint color when a skeleton part is clicked
let playColor = "#423197";



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //load images referncing p5.
    skullImage = await loadImage('assets/images/ingameSkull.png');
    armImage = await loadImage('assets/images/ingameHand.png');
    ribCageImage = await loadImage('assets/images/ingameCage.png');


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //add background color
    background('black');

    if (skullOn) {

        //using tint referncing p5. 
        tint(playColor);

    }

    else {
        noTint();
    }
    //draws the images of a skull, ribcage, and arm.
    image(skullImage, 1300, 325);

    if (armOn) {

        tint(playColor);

    }

    else {
        noTint();
    }
    image(armImage, 310, 145);


    if (ribCageOn) {

        tint(playColor);

    }

    else {
        noTint();
    }
    image(ribCageImage, 650, 100);


}

function mousePressed() {
    if (mouseX > 1200) {

        skullOn = !skullOn;
    }

    if (mouseX < 600) {

        armOn = !armOn;
    }

    if (mouseX > 600 && mouseX < 1200) {

        ribCageOn = !ribCageOn;
    }
}