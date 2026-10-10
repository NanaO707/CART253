/**
 * Instructions Assignment #2 (Really Weird Prototype)
 * Bella Perez
 * 
 * The project below is a colony of eyeballs. When told to make something very werid, I thought of the idea eye contact because its truely unerving to me. 
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

//array for eyeball size
let eyeBallSize = [];

//constant eyeball variable 
const eyeBallAmount = 55;


/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load a gif/image in refernce to p5. 
*/
async function setup() {
    //create canvas
    createCanvas(900, 900);

    //Loading the gif (referencing p5 loadImage)
    eyeBallGif = await loadImage('assets/EyeBoss-SheetStacked-gif.gif');

    //loop all the eyeballs until it reaches eyeBallAmount
    for (let index = 0; index < eyeBallAmount; index++) {

        //randomly assigns a value to stay at a specific location 
        eyeBallX[index] = random(0, 900);
        eyeBallY[index] = random(0, 900);

        //resize the eyeballs randomly referencing p5
        eyeBallSize[index] = random(24, 64 * 4);
    }
}

/**
 * For the setup, I used p5's respective resources for loadImage. Draws the gifs/images , with a randomized eyeball size and position. 
*/

function draw() {

    push();
    //bg color
    background(bgColor);

    //loop to draw the images at a specific position
    for (let index = 0; index < eyeBallAmount; index++) {
        //
        image(eyeBallGif, eyeBallX[index], eyeBallY[index], eyeBallSize[index], eyeBallSize[index]);

    }
    pop();


}