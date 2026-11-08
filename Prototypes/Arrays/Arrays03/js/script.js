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
let chosenPredictions = '';

//array of predictions
let predictionWords = ['yes', 'no', 'do not ask', 'you are wrong', 'very dobtful', 'outlook good', 'ask again later', 'it is certain'];


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create a canvas
    createCanvas(900, 900);
    //center image
    imageMode(CENTER);
    //load image
    magicBallImg = await loadImage('assets/images/Magic_eight_ball.png');

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background color
    background('blue');

    //draws the image and its position
    image(magicBallImg, width / 2, height / 2);

}