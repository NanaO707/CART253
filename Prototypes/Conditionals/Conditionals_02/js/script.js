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
    rightX: 1600,

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
    //left fish color is orange 
    fill(fish.fillColor.orange);
    // drawing left fish body
    ellipse(fish.leftX, fish.y, fish.w, fish.h);
    //left fish tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.leftX, fish.y,
        fish.leftX - fish.w / 2 - 60, fish.y - 35,
        fish.leftX - fish.w / 2 - 60, fish.y + 35);


    //right fish color white
    fill(fish.fillColor.white);
    //drawing right fish body
    ellipse(fish.rightX, fish.y, fish.w, fish.h);
    //tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.rightX, fish.y,
        fish.rightX + fish.w / 2 + 60, fish.y - 35,
        fish.rightX + fish.w / 2 + 60, fish.y + 35);


    pop();





}

