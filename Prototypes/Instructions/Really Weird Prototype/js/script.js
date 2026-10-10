/**
 * Instructions Assignment #2 (Really Weird Prototype)
 * Bella Perez
 * 
 * Colony of eyes...
 * 
 */

"use strict";

//declaring bg color black
let bgColor = ('black');

//declaring array of the eyeball gif
let eyeBallGif = [];
//array of each eyeball x & y
let eyeBallX = [];
let eyeBallY = [];
const eyeBallAmount = 205;


/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load a gif/image in refernce to p5.
*/
async function setup() {
    //create canvas
    createCanvas(900, 900);

    //Loading the gif (referencing p5 loadImage)
    eyeBallGif = await loadImage('assets/EyeBoss-SheetStacked-gif.gif');

    for (let index = 0; index < eyeBallAmount; index++) {

        //randomly assigns a value to stay at a specific location 
        eyeBallX[index] = random(0, 900);
        eyeBallY[index] = random(0, 900);
    }
}

/**
 * For the setup, I used p5's respective resources for loadImage
*/

function draw() {

    push();
    //bg color
    background(bgColor);

    // Drawing the images at a sspecific position
    for (let index = 0; index < eyeBallAmount; index++) {
        image(eyeBallGifs, eyeBallX[index], eyeBallY[index]);
        pop();
    }

}