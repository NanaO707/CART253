/**
 * Get that Carrot!
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// What parts of a program can you use variables in (especially which numbers in a program can be replaced with variables)
// What happens when you change the values in those variables over time ?
//     Can you use variables to change: positions ? Sizes ? Colours ? Stroke weights ? Rotations ?
//         What happens if you use different kinds of math to change the variables ? Addition ? Subtract ? Division ? Multiplication ? Exponentials ? Sine ? Cosine ? Tangent ? Random ? Perlin Noise ?

let backgroundColor = 'rgb(65, 156, 248)';

//declaring bunny head, ears, eyes, and colors
let bunny = {

    //position of the bunny head
    headX: 900,
    headY: 600,
    //the diameter/size of the head
    headSize: 150,

    eyesX: 900,
    eyesY: 600,
    eyesSize: 10,

    earsX: 40,
    earsY: 50,
    earSize: 80,

    fillColor: {
        black: (0),
        brown: '#5b3912fe',
        pink: '#d1a2ca'
    }

}

//declaring carrot base, leaves, and colors
let carrot = {

    baseX: 1400,
    baseY: 600,

    leavesX: 100,
    leavesY: 100,


    fillColor: {
        orange: '#dd7d0f',
        green: '#2a9b11'
    }

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

function setup() {
    //creating canvas 
    createCanvas(1920, 1080);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();
    //bg color fill 
    background(backgroundColor);

    //no outline
    noStroke();
    //fill color
    fill(bunny.fillColor.brown);
    //the x,y and size of the head
    circle(bunny.headX, bunny.headY, bunny.headSize);

    //fill the eyes with black 
    fill(bunny.fillColor.black);

    //calcualte and draw the bunny eyes relative to the head
    circle(bunny.headX - bunny.headSize / 5, bunny.headY - bunny.headSize / 5, bunny.headSize / 3);
    circle(bunny.headX + bunny.headSize / 5, bunny.headY - bunny.headSize / 5, bunny.headSize / 3);









    pop();

}