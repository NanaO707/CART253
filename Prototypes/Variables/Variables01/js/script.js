/**
 * Get that Carrot!
 * Bella Perez
 * 
 * The following prototype contains a bunny trying to move towards a carrot automatically.
 */

"use strict";

let backgroundColor = 'rgb(65, 156, 248)';

//declaring bunny head, ears, eyes, and colors
let bunny = {

    //position of the bunny heads
    headX: 900,
    headY: 600,
    //the diameter/size of the head
    headSize: 150,

    //the diameter/size of the eyes
    eyesSize: 40,

    //ear position
    earsX: 870,
    earsY: 450,
    //ear height and width
    h: 200,
    w: 40,

    //bunny speed
    speed: 5,

    //the fill color for the head, eyes, and ears
    fillColor: {
        black: (0),
        brown: '#5b3912fe',
        pink: '#d1a2ca'
    }

}

//declaring carrot base, leaves, and colors
let carrot = {

    //base leaf 
    baseX: 1400,
    baseY: 600,

    //stroke weight for the leaves on the carrot
    leafThickness: 10,

    //carrot leaves and the base of the carrot color
    fillColor: {
        orange: '#dd7d0f',
        green: '#2a9b11'
    }

}

/**
 * The setup function only runs once per p5. It's soley creating a canvas
*/

function setup() {
    //creating canvas 
    createCanvas(1920, 1080);

}


/**
 * calls upon the drawing functions for the bunny and the carrot. Per p5 this function will loop endlessly.
*/
function draw() {

    push();
    //bg color fill 
    background(backgroundColor);

    //calling full bunny drawing  
    bunnyDrawing();
    //calling full carrot drawing 
    carrotDrawing();

    pop();

}

/**
 * This function contains all the code for drawing the differnt parts of the bunny such as the head, eyes, and ears.
 *  It also assigns them their respective color.
 * Conatin's the movement of the bunny along the x axis to move towards the carrot.
 * Uses ellipses and circles.
*/

function bunnyDrawing() {
    //no outline
    noStroke();
    //fill color
    fill(bunny.fillColor.brown);

    ellipseMode(CENTER);
    //the x,y and size of the head
    circle(bunny.headX, bunny.headY, bunny.headSize);

    //fill the eyes with black 
    fill(bunny.fillColor.black);

    //calcualte and draw the bunny eyes relative to the head
    circle(bunny.headX - bunny.headSize / 5.5, bunny.headY - bunny.headSize / 5.5, bunny.eyesSize);
    circle(bunny.headX + bunny.headSize / 5.5, bunny.headY - bunny.headSize / 5.5, bunny.eyesSize);

    //draws the base ears brown and positions the ears
    fill(bunny.fillColor.brown);
    ellipse(bunny.earsX, bunny.earsY, bunny.w, bunny.h);
    ellipse(bunny.earsX + 60, bunny.earsY, bunny.w, bunny.h);

    //draws the inner ears pink and positions the ears slightly smaller than the base
    fill(bunny.fillColor.pink);
    ellipse(bunny.earsX, bunny.earsY, bunny.w - 20, bunny.h - 20);
    ellipse(bunny.earsX + 60, bunny.earsY, bunny.w - 20, bunny.h - 20);

    bunny.headX = bunny.headX + bunny.speed;
    bunny.earsX = bunny.earsX + bunny.speed;

}

/**
 * This function contains all the code for drawing the differnt parts of the carrot such as the base carrot and leaves.
 *  It also assigns them their respective color. Uses lines and a triangle.
*/

function carrotDrawing() {

    //filling the carrot base 
    fill(carrot.fillColor.orange);
    triangle(carrot.baseX - 40, carrot.baseY, carrot.baseX + 40, carrot.baseY, carrot.baseX, carrot.baseY + 150);

    //filling the carrot leaves
    stroke(carrot.fillColor.green);
    strokeWeight(carrot.leafThickness);
    //leave drawings changing each leave's position
    line(carrot.baseX, carrot.baseY, carrot.baseX, carrot.baseY - 50);
    line(carrot.baseX - 10, carrot.baseY, carrot.baseX - 30, carrot.baseY - 40);
    line(carrot.baseX + 10, carrot.baseY, carrot.baseX + 30, carrot.baseY - 40);

}