/**
 * Mystery door?
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
// What parts of a program can you use variables in (especially which numbers in a program can be replaced with variables)
// What happens when you change the values in those variables over time ?
//     Can you use variables to change: positions ? Sizes ? Colours ? Stroke weights ? Rotations ?
//         What happens if you use different kinds of math to change the variables ? Addition ? Subtract ? Division ? Multiplication ? Exponentials ? Sine ? Cosine ? Tangent ? Random ? Perlin Noise ?
//             What kinds of meanings can be created through change in your program ? Movement ? Growth ? Death ? Life ? Decay ? Indecision ? Time passing ? Sadness ? Joy ?

"use strict";
//bg color variable
let bgColor = '#000000';

//variables for all parts of the door
let door = {
    //door pos on the canvas
    x: 960,
    y: 540,

    //door size by height and width
    height: 400,
    width: 200,

    knob: {
        //diameter/size of the knob
        size: 40,

    }
    ,

    //the door and doorknob colors
    fillColor: {
        brown: '#432712',
        black: '#000000',
        green: '#1c7428',
        orange: '#e67727',
        purple: '#382261'
    }
}
/**
 * The setup only contains creating the canvas and runs once.
*/
function setup() {

    //create canvas
    createCanvas(1920, 1080);

}


/**
 * Draw contains the code that will endlessly loop per p5. Draws the door and doorknob
*/
function draw() {


    //add background color
    background(bgColor);


    //draw rectangle(door) from its center
    rectMode(CENTER);

    //call door color change function
    doorColorChange();


    //door dimensions and position 
    rect(door.x, door.y, door.width, door.height);

    //remove outline
    noStroke();

    //fill color brown (doorknob)
    fill(door.fillColor.brown);

    //changing the doorknob values so it moves as one with door
    circle(door.x + door.width / 3, door.y, door.knob.size);

}

/**
 * Function that conatins the pallete lerp that runs every 10secs 
*/
function doorColorChange() {
    //palette lerp (referencing p5). 4 colors appear every 10secs
    let doorColor = (paletteLerp([[door.fillColor.black, 0.02], [door.fillColor.green, 0.05], [door.fillColor.orange, 0.25], [door.fillColor.purple, 1],], millis() / 10000 % 1));

    //fill color with palette lerp
    fill(doorColor);



}
