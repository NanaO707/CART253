/**
 * Instructions Assignment #2  
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring bg color variable (baby blue!)
let bgColor = "#7faac5";

//house variables 
let house = {
    x: 400,
    y: 400,
    windowSize: 60,

    colors: {
        baseHome: "#231410",
        window: "#b290aa",

    }

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    //creating a canvas
    createCanvas(800, 800);

}


/**
 * making a cute little home (a painted ladies esque style!) 
*/
function draw() {
    push();
    //applying blue bg color
    background(bgColor);
    //base house fill using hexcodes
    fill(house.colors.baseHome);
    //using p5 to center base shape using rectMode center (400,400 becomes the center) 
    rectMode(CENTER);
    rect(house.x, house.y, height / 2, width / 2); //base house 

    //window01-btm right
    fill(house.colors.window);
    //calculates the window spacing (500,500)
    rect(house.x + house.x / 4, house.y + house.y / 4, house.windowSize, house.windowSize);

    //window02- top left
    //calculates the window spacing (300,300)
    rect(house.x - house.x / 4, house.y - house.y / 4, house.windowSize, house.windowSize);

    //window03-btm left
    //calculates the window spacing (300,500)
    rect(house.x - house.x / 4, house.y + house.y / 4, house.windowSize, house.windowSize);

    //window04 -top right
    //calculates the window spacing (500,300)
    rect(house.x + house.x / 4, house.y - house.y / 4, house.windowSize, house.windowSize);

    //creating the roof
    triangle(200, 200, 400, 50, 600, 200);

    pop();




}