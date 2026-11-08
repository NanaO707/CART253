/**
 * Soapy strikes again
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring bg color black
let bgColor = '#66f0de';

//single soap image
let soapImg;

//array of each soap x & y
let soapX = [];
let soapY = [];

//array for soap size
let soapSize = [];

//amount of soap images 
const SOAPAMOUNT = 23;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    createCanvas(900, 900);
    soapImg = await loadImage('assets/images/Soap-Background-PNG.png');

    for (let i = 0; i < SOAPAMOUNT; i++) {

        soapX[i] = random(0, 800);
        soapY[i] = random(0, 800);

        soapSize[i] = random(843 / 12, 1053 / 10);

    }


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(bgColor);

    for (let i = 0; i <= SOAPAMOUNT; i++) {
        image(soapImg, soapX[i], soapY[i], soapSize[i], soapSize[i]);
    }



}