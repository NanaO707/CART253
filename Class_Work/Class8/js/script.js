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

let i;


let ellipseAmount = 20;

const ELLIPSENUM = 20;

async function setup() {
    createCanvas(500, 500);

    //imageMode(CENTER);
    //clownImg = await loadImage('assets/images/clown.png');

    startColor = color(255, 0, 255);

    endColor = color(0, 255, 255);


}

function drawEllipse() {
    push();

    let x = random(0, width);
    let y = random(0, height);

    fill(0, 255, 0);
    ellipse(x, y, 10, 10);

    pop();
}

function draw() {
    background('skyblue');

    for (let i = 0; i < ELLIPSENUM; i++) {
        drawEllipse();
    }

    noLoop();

    // i = 0;

    // y = height / 2;

    // while (i < 9) {
    //     text(i, width / 2, y);
    //     y += 20;

    //     i = i + 1; //i++

    // }

    // y = height / 2;
    // for (let i = 0; i < 9; i++) {
    //     text(i, 20, y);
    //     y += 20;

    // }

    // gradientIndex = 0;
    // y = 0;

    // while (gradientIndex < 1) {

    //     let rectColor = lerpColor(startColor, endColor, gradientIndex);

    //     noStroke();
    //     fill(rectColor);
    //     rect(0, y, width, 2);
    //     //
    //     gradientIndex += .004;
    //     y += 2;

    // }




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

