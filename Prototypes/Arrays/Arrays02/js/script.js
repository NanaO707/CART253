/**
 * Random Sounds - What a Hoot! 
 * Bella Perez
 * 
 * Click anywhere on the canvas to play a randomized sound effect.
 * The best perk, however, is the view. Maybe very blue.
 * 
 */

"use strict";

//sound effect array
let soundEffects = [];
//sound asset array
let soundAssets = ['135785__henrythetrain__air-rush.wav', '201808__fartheststar__poker_chips6.wav', '338746__cabled_mess__guitar-fragment-14-march-2016.wav', '655834__yevashenpillay__broom-sweep-repeated.wav', 'bark.wav'];

//fixed sound effect amount
const SOUNDEFFECTSAMOUNT = 5;

//array for the gradient background
let gradient = [];

/**
 * The setup function is used as a base in p5 and will only run once. Creates canvas and loops the sound effect amount. 
*/
function setup() {

    //create canvas
    createCanvas(900, 900);

    // Loops the sound effect amount 
    for (let i = 0; i < SOUNDEFFECTSAMOUNT; i++) {

        //loads each sound using the asset file array. Using p5 createAudio.
        soundEffects[i] = createAudio('assets/sounds/' + soundAssets[i]);

    }

}

/**
 * For the draw function, loops to apply gradient colors using stroke based on canvas width.
*/
function draw() {

    //loops every line less than the width of the canvas
    for (let i = 0; i < width; i++) {

        //the line position based on canvas width is given an rgb value
        gradient[i] = map(i, 0, width, 0, 255);

        //colors the line(stroke) from the array
        stroke(100, gradient[i], 250);
        //draws a vertical line
        line(i, 0, i, height);
    }

}
/**
 * Plays a random soundEffect every click from the array
*/
function mouseClicked() {
    //chooses a random sound effect from the array and plays it
    random(soundEffects).play();
}