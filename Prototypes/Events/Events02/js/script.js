/**
 * Snake Wonders
 *Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let snake = {

    headX: 450,
    headY: 450,
    headSize: 24,

    fillColor: {
        green: '#1d7c18',
    }

}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    //create canvas
    createCanvas(900, 900);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //bg color is black
    background(0);

    //no outline
    noStroke();
    //sets color to green
    fill(snake.fillColor.green);
    //circle drawn
    circle(snake.headX, snake.headY, snake.headSize);

}