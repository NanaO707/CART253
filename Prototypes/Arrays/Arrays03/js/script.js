/**
 * Magic Eight Ball, Predict My Future
 * Bella Perez
 * 
 * Welcome to the magical realm of fortune telling through a magic eight ball. 
 * Ask a question either out loud or in your head.
 * Hold the mouse to shake the the magical tool, and once you release it,
 * an answer awaits you...
 * 
 */

"use strict";
// variable for the image 
let magicBallImg;

//empty string of what prediction it is
let chosenPrediction = '';

//array of predictions
let predictionWords = ['yes', 'no', 'do not ask', 'you are wrong', 'very dobtful', 'outlook good', 'ask again later', 'it is certain'];

//array of shake speeds
let shakeSpeed = [2, 5, 8, 10, 13, 16, 20];

//initial shake amount
let shakeAmount = 0;

//shake x & y variables
let shakeX = 0;
let shakeY = 0;


/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load a image in reference to p5. Also sets the text to center and its size.
*/
async function setup() {

    //create a canvas
    createCanvas(900, 900);
    //center image
    imageMode(CENTER);

    //centers the text
    textAlign(CENTER, CENTER);

    //size of text is set 
    textSize(30);

    //load image
    magicBallImg = await loadImage('assets/images/Magic_eight_ball.png');

}


/**
 * The draw function sets the bg color and draws the magic eight ball with its shake and position.
 *  Draws the text and sets shakeX and Y to a random range between - & + shake amount.
*/
function draw() {
    //background color
    background('blue');

    //draws the image and its position with it's shake along the x & y axes
    image(magicBallImg, width / 2 + shakeX, height / 2 + shakeY);


    //sets shakeX and Y to a random range between - & + shake amount
    shakeX = random(-shakeAmount, shakeAmount);
    shakeY = random(-shakeAmount, shakeAmount);

    //text fill color
    fill('white');

    //draws text based on empty strings and its position
    text(chosenPrediction, width / 2, height / 2);

}
/**
 * Chooses a random shake speed in the array. 
*/
function mousePressed() {

    //cycles through the shake speeds and chooses one every click
    shakeAmount = random(shakeSpeed);

    //no prediction while shaking
    chosenPrediction = '';

}
/**
 * Chooses a random prediction everytime a click is released in the array. Stops the shaking as well.
*/
function mouseReleased() {
    //stops the shaking
    shakeAmount = 0;

    //empty string cycles through all random predictions and chooses one out of all strings in the array
    chosenPrediction = random(predictionWords);

}