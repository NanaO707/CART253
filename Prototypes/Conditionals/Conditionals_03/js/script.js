/**
 * Little grass needs the rain
 * Bella Perez
 * 
 * Click the screen to make the rain go away and turn the sky bright and little grass grows! And click again to reverse the effect :)
 * 
 */

"use strict";

//tracks if it's sunny 
let sunny = false;

//variables for the two sky colors
let sky = {

    lightBlue: '#65b4fd',
    grey: '#969696',
}

//variable for the rain color
let rain = {

    darkBlue: '#121664',
}
//variable for the grass color and height
let grass = {

    h: 0,
    darkGreen: '#033f20',
}

//variable for the ground color
let ground = {

    brown: '#534225',
}

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas.
*/
function setup() {

    //create canvas
    createCanvas(900, 900);

}

/**
 * For the draw function draws the grass, rain, and ground. Contains conditionals so that when it's bright, the grass grows. Otherwise, it rains, and the grass retracts. 
*/
function draw() {

    //sets background color to light blue and the grass grows when sunny until 50 pixels tall
    if (sunny) {
        background(sky.lightBlue);

        //grass will grow upwards
        if (grass.h < 50) {
            //growth speed
            grass.h = grass.h + 0.5;
        }
    }

    //otherwise sets background to grey and retracts grass and loops the random rain 
    else {
        background(sky.grey);
        //grass will retract
        if (grass.h > 0) {
            //retract speed
            grass.h = grass.h - 0.5;
        }

        //makes the rain dark blue
        stroke(rain.darkBlue);

        //loops 50 lines for the rain randomly every frame
        for (let index = 0; index < 50; index++) {
            //randomizes the position of each raindrop
            let x = random(width);
            let y = random(height - 50);

            //draws the raindrop line
            line(x, y, x, y + 10);

        }
    }

    //sets grass to dark green color
    stroke(grass.darkGreen);
    //sets grass thickness 
    strokeWeight(3);

    //for loop to draw the strands of grass every 10 pixels right about the ground.
    for (let index = 5; index < width; index += 10) {
        line(index, height - 50, index, height - 50 - grass.h);

    }

    //removes outline
    noStroke();
    //sets ground to brown
    fill(ground.brown);
    //ground box (height is 50 pixels)
    rect(0, height - 50, width, 50);

}
/**
 * The mousePressed function runs every time a mouse is clicked on the screen.

*/
function mousePressed() {
    //when the mouse is pressed rainy becomes sunny and sunny becomes raining 
    sunny = !sunny;
}
