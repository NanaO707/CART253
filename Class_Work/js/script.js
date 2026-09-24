/**
 * Class #3 (technically 1 4 me)
 * Bella Perez
 * 
 * 
 * Variables intro w p5 ;-;
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//let ellipse_Size = 550; 
//let rect_Size = 10; 

let backGroundColor = 0;

let sun = {
//sun variables
    x: 20,
    y: 50,
    sunSize: 10,
    r: 255,
    g: 255,
    b: 0    
}


let bird = {
//you'll never guess bird variables
    x: 20,
    y: 50,
    birdSize: 30,
    r: 0,
    g: 0,
    b: 255
}

function setup() {
    //create canvas :p
    createCanvas(400,400);
}


/**
 * Class things --> a square and a circle 
*/
function draw() {
   background(backGroundColor,backGroundColor,backGroundColor);
    fill (sun.r,sun.g,sun.b);
    ellipse(sun.x,sun.y,sun.sunSize,sun.sunSize);

    fill (bird.r,bird.g,bird.b);
    ellipse(bird.x,bird.y,bird.birdSize,bird.birdSize);

    bird.x = bird.x-1;
    bird.x = constrain(bird.x,0, width-100);
    console.log (bird.x);
    backGroundColor = backGroundColor+1;

  //  ellipse (250,250,ellipse_Size,ellipse_Size);

    //ellipse_Size = ellipse_Size-1;
    
    //fill("blue");
    //rect (rect_Size,height/2,20);

    //rect_Size = rect_Size+.5;

}