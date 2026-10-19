/**
 * All about Fish and Love 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//background color set to blue 
let bgColor = '#5367b0';

//fish variables
let fish = {
    //left and right fish x variables 
    leftX: 300,
    rightX: 1000,

    //fish height and width variables 
    h: 70,
    w: 140,

    //left and right fish y variable
    y: 400,

    //fish fill colors
    fillColor: {
        orange: '#d78c3c',
        white: '#d0d0fd'
    }
}

let typed = "";
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    //create canvas
    createCanvas(1920, 1080);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    push();
    //bg color 
    background(bgColor);

    noStroke();
    //drawing left fish 
    fill(fish.fillColor.orange);
    //head
    ellipse(fish.leftX, fish.y, fish.w, fish.h);
    //tail
    triangle(fish.leftX - fish.w / 2 + 70, fish.y,
        fish.leftX / 2, fish.y - 35,
        fish.leftX / 2, fish.y + 35)


    //drawing right fish 
    fill(fish.fillColor.white);

    pop();





}