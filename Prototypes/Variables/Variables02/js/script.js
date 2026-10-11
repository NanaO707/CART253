/**Give me Love!
 * 
 * Bella Perez
 * 
 *A beating heart that grows when you move the mouse and turns pink when your mouse is over the canvas. It represents that love permanently changes you!
 * 
 */

"use strict";


//background color
let bgColor = '#000202a9';

//heart variables 
let heart = {
    //the x,y
    x: 450,
    y: 450,

    //size for the triangle and diameter for the circles
    size: 106,

    //fill colors 
    fillColor: {
        red: '#800606',
        pink: '#ce93ca',
    }
}

/**
 * The setup only contains creating the canvas and runs once 
*/
function setup() {
    //create canvas
    createCanvas(900, 900);
}


/**
 * Draw contains the code that will endlessly loop. It calls the heart function and background color.
*/
function draw() {

    //assign background color
    background(bgColor);

    //call heart function to grow and beat when you move the mouse on thee canvas
    heartGrowAndBeat();
    //call heart function to draw 
    heartDraw();

}
/**
*this function contains all the code for drawing the base heart which is made using two circles and a triangle. 
*/
function heartDraw() {

    //remove outline
    noStroke();

    //adds red color to the heart
    fill(heart.fillColor.red);
    //create 2 circles in the middle of the canvas but slightly spaced
    circle(heart.x - heart.size * 0.38, heart.y - heart.size * 0.19, heart.size);
    circle(heart.x + heart.size * 0.38, heart.y - heart.size * 0.19, heart.size);

    //create triangle for the bottom part of the heart
    triangle(heart.x - heart.size * 0.85, heart.y, heart.x + heart.size * 0.85, heart.y, heart.x, heart.y + heart.size * 1.23);

}
/** 
*this function contains the code for the heart to beat and grow as you move the mouse on the canvas.
*/
function heartGrowAndBeat() {
    //heart grows bigger as it moves down and shrinks the opposite direction. The heart beats constantly.
    heart.size = 50 + mouseX / 4 + mouseY / 4 + frameCount % 40;
    heart.size = 50 + mouseY / 4 + mouseY / 4 + frameCount % 40;

    //when mouse moves across the canvas it turns the heart pink permanently
    if (mouseX && mouseY) {
        heart.fillColor.red = heart.fillColor.pink;

    }

}

