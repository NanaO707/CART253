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

let clownImg;

let xPos = 0;

let x = 20;
let y = 20;
let imageWidth = 40;

async function setup() {
    createCanvas(500, 500);

    imageMode(CENTER);
    clownImg = await loadImage('assets/images/clown.png');


}

function draw() {
    background('skyblue');

    x = 20;
    y = 20;

    //xPos++;

    while (x < width) {
        image(clownImg, x, y, imageWidth, imageWidth);

        // while (y < height) {
        //     image(clownImg, x, y, imageWidth, imageWidth);
        //     y += imageWidth;

        // }

        x += imageWidth;
        //y = 20;
    }






}

