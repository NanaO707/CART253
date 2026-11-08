/**
 * Magic Eight Ball, Predict My Future
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background color
    background('blue');

    //draws the image and its position with it's shake along the x & y axes
    image(magicBallImg, width / 2 + shakeX, height / 2 + shakeY);


    shakeX = random(-shakeAmount, shakeAmount);
    shakeY = random(-shakeAmount, shakeAmount);

    //text fill color
    fill('white');

    //draws text based on empty strings and its position
    text(chosenPrediction, width / 2, height / 2);

}
/**
 * Chooses a random shake speed and prediction every click from their respective array
*/
function mousePressed() {

    //cycles through the shake speeds and chooses one every click
    shakeAmount = random(shakeSpeed);

    //empty string cycles through all random predictions and chooses one out of all strings in the array
    chosenPrediction = random(predictionWords);

}

function mouseReleased() {
    shakeAmount = 0;
}