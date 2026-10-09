/**
 * Instructions Assignment #2 (Really Weird Prototype)
 * Bella Perez
 * 
 * PUT SMT DONT FORGET.
 * 
 */

"use strict";

//declaring bg color black
let bgColor = ('black');

let eyeGif;

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load a gif/image in refernce to p5.
*/
async function setup() {
    //create canvas
    createCanvas(900, 900);

    // Loading the gif (referencing p5 loadImage)
    eyeGif = await loadImage('assets/EyeBoss-SheetStacked-gif.gif');
    //resizing the gif
    eyeGif.resize(64 * 4, 64 * 4);

}

/**
 * For the setup, I used p5's respective resources for loadImage
*/

function draw() {

    push();
    //bg color
    background(bgColor);

    // Displayibg the image and position
    image(eyeGif, 300, 600);


    pop();
}