/**Give me Love
 * 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
// What parts of a program can you use variables in (especially which numbers in a program can be replaced with variables)
// What happens when you change the values in those variables over time ?
//     Can you use variables to change: positions ? Sizes ? Colours ? Stroke weights ? Rotations ?
//         What happens if you use different kinds of math to change the variables ? Addition ? Subtract ? Division ? Multiplication ? Exponentials ? Sine ? Cosine ? Tangent ? Random ? Perlin Noise ?

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let bgColor = '#a2c6cf';

//heart variables 
let heart = {
    x: 450,
    y: 450,

    //size or diameter
    size: 106,
    //fill colors 
    fillcolor: {
        red: '#800606',
        pink: '#f3bbef',
        blue: '#00236f'
    }
}
function setup() {
    //create canvas
    createCanvas(900, 900);



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(bgColor);

    //call heart to draw 
    heartDraw();




}

function heartDraw() {

    //remove outline
    noStroke();
    //add red color to the heart
    fill(heart.fillcolor.red);
    //create 2 circles in the middle of the canvas but slightly spaced
    circle(heart.x - 40, heart.y - 20, heart.size);
    circle(heart.x + 40, heart.y - 20, heart.size);

    //craete triangle for the bottom
    triangle(heart.x + 90, heart.y, heart.x - 90, heart.y, heart.x, heart.y + 130);
}