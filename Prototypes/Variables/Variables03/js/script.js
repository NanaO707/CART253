/**
 * Find me!
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//bg color variable
let bgColor = '#b58a8a';

//variables for all parts of the door
let door = {
    x: 450,
    y: 450,

    height: 200,
    width: 100,

    knob: {
        x: 500,
        y: 450,

        //diameter of the knob
        size: 30,
    }
    ,

    //the door and doorknob colors
    fillColor: {
        brown: '#432712',
        black: '#000000',
    }
}
/**
 * The setup only contains creating the canvas and runs once.
*/
function setup() {

    //create canvas
    createCanvas(900, 900);

}


/**
 * Draw contains the code that will endlessly loop per p5.
*/
function draw() {

    //add background color
    background(bgColor);

    //center the rectangle(door)
    rectMode(CENTER);

    //fill color black(door)
    fill(door.fillColor.black);
    //door dimensions and position 
    rect(door.x, door.y, door.width, door.height);

    //remove outline
    noStroke();

    //fill color black(doorknob)
    fill(door.fillColor.brown);
    circle(door.knob.x, door.knob.y, door.knob.size);


}