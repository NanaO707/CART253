/**
 * Soapy strikes again
 * Bella Perez
 * 
 * An army of soap is at work. Some are smaller, others bigger, all moving up and down at various speeds.
 * 
 */

"use strict";

//declaring bg color
let bgColor = '#66f0de';

//single soap image
let soapImg;

//array of each soap x & y
let soapX = [];
let soapY = [];

//array for soap size
let soapSize = [];

//amount of soap images 
const SOAPAMOUNT = 23;

//array for soap speed
let soapSpeed = [];

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load a image in refernce to p5. 
*/
async function setup() {

    //create a canvas
    createCanvas(900, 900);
    //load image 
    soapImg = await loadImage('assets/images/Soap-Background-PNG.png');

    //calls function
    soapRandomizer();
}

/**
 * For the draw function, I used p5's respective resources for loadImage syntax. Contains loop to draws the images, with a randomized soap size and position. 
*/
function draw() {

    background(bgColor);

    //loop to draw the images at a specific position and size
    for (let i = 0; i < SOAPAMOUNT; i++) {
        image(soapImg, soapX[i], soapY[i], soapSize[i], soapSize[i]);
    }

    //calls soap move function
    soapMove();



}
/**
 * For the soapRandomizer function, it randomly assigns a value for x & y and size.
*/
function soapRandomizer() {
    //loop all the soap until it reaches 23 or soap amount
    for (let i = 0; i < SOAPAMOUNT; i++) {

        //randomly assigns a value to stay at a specific location x & y
        soapX[i] = random(0, 800);
        soapY[i] = random(0, 800);

        //randomly assigns a size within range 
        soapSize[i] = random(843 / 12, 1053 / 10);
        //randomly assigns a speed within range 
        soapSpeed[i] = random(2, 12);

    }
}
/**
 * For the soapMove function, it moves the mob of soap up and down continously. 
 * Changes direction based on if it's at the top or bottom of the canvas.
*/
function soapMove() {

    //loop all the soap until soap amount
    for (let i = 0; i < SOAPAMOUNT; i++) {

        //soap moves vertically based on speed
        soapY[i] += soapSpeed[i];

        //if it's at the bottom, it moves the soap up
        if (soapY[i] + soapSize[i] > height) {

            soapY[i] = height - soapSize[i];
            soapSpeed[i] = -soapSpeed[i];

        }
        //if it's at the top, it moves the soap down
        if (soapY[i] < 0) {

            soapY[i] = 0;
            soapSpeed[i] = -soapSpeed[i];

        }
    }
}

