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

//sound variables fopr each skele part
let skullSound;
let armSound;
let ribCageSound;




/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load an image in reference to p5. 
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //load images referncing p5.
    skullImage = await loadImage('assets/images/ingameSkull.png');
    armImage = await loadImage('assets/images/ingameHand.png');
    ribCageImage = await loadImage('assets/images/ingameCage.png');

    //referncing p5 createAudio().
    armSound = createAudio('assets/sounds/816866__josefpres__piano-loops-148-efect-4-octave-long-loop-120-bpm.wav');
    skullSound = createAudio('assets/sounds/685055__gregorquendel__symphonic-choir-arpeggio-i-variation-ii.wav');
    ribCageSound = createAudio('assets/sounds/202197__zagi2__weird-cartoon-groove2.wav');

    //referncing p5 loop()
    armSound.loop = true;
    skullSound.loop = true;
    ribCageSound.loop = true;
}

/**
 *  Draws the images of a skull, ribcage, and arm. Add a purple tint if they are true else removes tint.
*/
function draw() {

    //add background color
    background('black');

    //if skull is on/true. using tint referncing p5. Adds a tint to the image and turns it purple
    if (skullOn) {

        tint(playColor);
        //plays specific sound effect for skull
        skullSound.play();

    }

    else {
        //removes purple tint effect
        noTint();
    }

    //draws the images of a skull, ribcage, and arm.
    image(skullImage, 1300, 325);

    if (armOn) {
        //adds a tint to the image and turns it purple
        tint(playColor);

        //plays specific sound effect for
        armSound.play();

    }

    else {
        //removes purple tint effect
        noTint();
    }

    image(armImage, 310, 145);


    if (ribCageOn) {
        //adds a tint to the image and turns it purple
        tint(playColor);

        //plays specific sound effect for ribcage
        ribCageSound.play();

    }

    else {
        //removes purple tint effect
        noTint();

    }

    image(ribCageImage, 650, 100);




}
/**
 * This function is built into p5 and works every time a mouse is pressed. Will turn each skeleton's perspective part on and off depending on what side of the screen is clicked.
 * 
*/
function mousePressed() {
    //right side is the skull
    if (mouseX > 1200) {
        //opposite of what skullon is set to.
        skullOn = !skullOn;
    }
    //left side is the arm
    if (mouseX < 600) {

        armOn = !armOn;
    }
    //in the middle of the two is the ribcage
    if (mouseX > 600 && mouseX < 1200) {

        ribCageOn = !ribCageOn;
    }
}