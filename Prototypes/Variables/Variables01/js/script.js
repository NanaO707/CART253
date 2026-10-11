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

    //the diameter/size of the eyes
    eyesSize: 40,

    earsX: 870,
    earsY: 450,
    h: 200,
    w: 40,

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

    ellipseMode(CENTER);
    //the x,y and size of the head
    circle(bunny.headX, bunny.headY, bunny.headSize);

    //fill the eyes with black 
    fill(bunny.fillColor.black);

    //calcualte and draw the bunny eyes relative to the head
    circle(bunny.headX - bunny.headSize / 5.5, bunny.headY - bunny.headSize / 5.5, bunny.eyesSize);
    circle(bunny.headX + bunny.headSize / 5.5, bunny.headY - bunny.headSize / 5.5, bunny.eyesSize);

    fill(bunny.fillColor.brown);
    ellipse(bunny.earsX, bunny.earsY, bunny.w, bunny.h);
    ellipse(bunny.earsX + 60, bunny.earsY, bunny.w, bunny.h);

    fill(bunny.fillColor.pink);
    ellipse(bunny.earsX, bunny.earsY, bunny.w - 20, bunny.h - 20);
    ellipse(bunny.earsX + 60, bunny.earsY, bunny.w - 20, bunny.h - 20);


    pop();

}

function bunnyDrawing() {

}