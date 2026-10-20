/**
 * Sunny day or a downpour
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * smt about the weather if the sky is grey, it rains and if the sky is sunny plants or grass emerges.
 */

"use strict";

let sky = {

    lightBlue: '#65b4fd',
    grey: '#969696',

}

let rain = {

    darkBlue: '#121664',

}

let grass = {

    h: 0,
    darkGreen: '#033f20',

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

    //sets background color to light blue
    background(sky.lightBlue);

    // //makes the rain dark blue
    // stroke(rain.darkBlue);


    // //loops 50 lines for the rain randomly every frame
    // for (let index = 0; index < 50; index++) {
    //     //randomizes the position of each raindrop
    //     let x = random(width);
    //     let y = random(height - 50);

    //     //draws the raindrop line
    //     line(x, y, x, y + 10);

    // }



    //sets grass to dark green color
    stroke(grass.darkGreen);
    //sets grass thickness 
    strokeWeight(3);

    //for loop to draw the strands of grass 
    for (let index = 5; index < width; index += 10) {
        line(index, height - 50, index, height - 50 - grass.h);

    }
    //grass will grow upwards
    if (grass.h < 50) {
        grass.h = grass.h + 1;
    }

    strokeWeight(1);



}