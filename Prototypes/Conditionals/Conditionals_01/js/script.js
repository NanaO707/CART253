/**
 * What's under my bed :p 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//making bg color black 
let bgColor = (0);

// declaring single bed image
let bedImage;

let monsterImage = [];


//array of each bed for x & y
let bedX = [];
let bedY = [];

//array of each bed for x & y
let monsterX = [];
let monsterY = [];

let monsterSize = [];


// //bedImage maximum count 
const bedAmount = 3;
/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load an image in refernce to p5. 
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //Loading the bed image referncing p5 loadImage 
    bedImage = await loadImage('assets/images/spooky-bed-removebg-preview.png');

    //Loading the bed image referncing p5 loadImage 
    monsterImage[0] = await loadImage('assets/images/monster_02.png');

    //Loading the bed image referncing p5 loadImage 
    monsterImage[1] = await loadImage('assets/images/monster_03.png');

    //Loading the bed image referncing p5 loadImage 
    monsterImage[2] = await loadImage('assets/images/monster_01.png');


    //for loop to assign the beds based on bedAmount bedX & bedY and increments as long as the value is less than bedAmount  
    for (let index = 0; index < bedAmount; index++) {

        // randomly assigns a value to stay at a specific location for x & y 
        bedX[index] = random(0, 700);
        bedY[index] = random(0, 500);

        monsterSize[index] = random(64, 64 * 2);

        monsterX[index] = bedX[index] + 230 - monsterSize[index] / 2;
        monsterY[index] = bedY[index] + 400 - monsterSize[index] / 2;

    }

}


/**
 * For the draw function, I used p5's respective resources for loadImage syntax.
*/
function draw() {

    push();

    background(0);

    //for loop to draw the images at the rnadomized locations 
    for (let index = 0; index < bedAmount; index++) {
        //draw image and position 
        image(bedImage, bedX[index], bedY[index]);

        image(monsterImage[index], monsterX[index], monsterY[index], monsterSize[index], monsterSize[index]);


    }


    pop();

}