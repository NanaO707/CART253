/**
 * Class #8 (technically 3 4 me)
 * Bella Perez
 * 
 * 
 * Loops intro w p5 ;-;
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

// let clownImg;

// let xPos = 0;

// let x = 20;
// let y = 20;
// let imageWidth = 40;

let startColor;

let endColor;

let gradientIndex;

let y;

async function setup() {
    createCanvas(500, 500);

    //imageMode(CENTER);
    //clownImg = await loadImage('assets/images/clown.png');

    startColor = color(255, 0, 255);

    endColor = color(0, 255, 255);


}

function draw() {
    background('skyblue');

    gradientIndex = 0;
    y = 0;

    while (gradientIndex < 1) {

        let rectColor = lerpColor(startColor, endColor, gradientIndex);

        noStroke();
        fill(rectColor);
        rect(0, y, width, 2);
        //
        gradientIndex += .004;
        y += 2;

    }




    // x = 20;
    // y = 20;

    // //xPos++;

    // while (x < width) {
    //     image(clownImg, x, y, imageWidth, imageWidth);

    //     // while (y < height) {
    //     //     image(clownImg, x, y, imageWidth, imageWidth);
    //     //     y += imageWidth;

    //     // }

    //     x += imageWidth;
    //     //y = 20;
    // }






}

