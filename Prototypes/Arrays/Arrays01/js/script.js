/**
 * Soapy strikes again
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring bg color black
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
    for (let i = 0; i <= SOAPAMOUNT; i++) {
        image(soapImg, soapX[i], soapY[i], soapSize[i], soapSize[i]);
    }



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

    }
}