/**
 * What's under my bed
 * Bella Perez
 * 
 * Click on the very spooky bed for a random monster between a slaad, troll, or slime. The size may vary as well!
 */

"use strict";

//making bg color black 
let bgColor = (0);

// declaring single bed image
let bedImage;

//random chosen monster variable
let monsterChoice;

//variable that tracks whether the monster is pops up 
let monsterPopUp = false;

//array of monster images 
let monsterImage = [];


//array of each bed for x & y
let bedX = [];
let bedY = [];

//array of each monster for x & y
let monsterX = [];
let monsterY = [];

//array of monster size 
let monsterSize = [];

//bedImage maximum count 
const bedAmount = 1;

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and async function setup to load an image in reference to p5. 
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //Loading the bed image referencing p5 loadImage. 
    bedImage = await loadImage('assets/images/spooky-bed-removebg-preview.png');

    //Loading monster1 image referencing p5 loadImage. 
    monsterImage[0] = await loadImage('assets/images/monster_02.png');

    //Loading the monster2 image referencing p5 loadImage.
    monsterImage[1] = await loadImage('assets/images/monster_03.png');

    //Loading the monster3 image referencing p5 loadImage.
    monsterImage[2] = await loadImage('assets/images/monster_01.png');

    //for loop to assign the beds based on bedAmount, bedX, and bedY and increments as long as the value is less than bedAmount. 
    for (let index = 0; index < bedAmount; index++) {

        // randomly assigns a value to stay at a specific location for x & y 
        bedX[index] = random(0, 700);
        bedY[index] = random(0, 500);

        //randomly assigns a size within range for the monster assets
        monsterSize[index] = random(64, 64 * 2);
        //places the monster's x & y in the lower middle positioned to the bed 
        monsterX[index] = bedX[index] + 230 - monsterSize[index] / 2;
        monsterY[index] = bedY[index] + 400 - monsterSize[index] / 2;

    }
}

/**
 * For the draw function, I used p5's respective resources for loadImage syntax. Loops to draw the bed and the monster images, including position and size. 
*/
function draw() {

    push();

    //background color set to black
    background(bgColor);

    //for loop to draw the images at the randomized locations 
    for (let index = 0; index < bedAmount; index++) {
        //draw the bed image and position 
        image(bedImage, bedX[index], bedY[index]);

        //if the monster pop up is true then it will draw the image, position, and size of the monster.
        if (monsterPopUp === true) {

            //draw the monster image, position, and size  
            image(monsterChoice, monsterX[index], monsterY[index], monsterSize[index], monsterSize[index]);

        }
    }

    pop();
}

/**
 * The mousePressed function runs every time a mouse is clicked. It loops through the number of beds and calculates that if the mouse is pressed over the dimensions of the bed, then a random monster will pop up(out of 3).
*/
function mousePressed() {

    //for loop amount of beds 
    for (let index = 0; index < bedAmount; index++) {

        //calculates that if the mouse is pressed for the dimensions of the bed then a random monster will pop up(out of 3). 
        if (mouseX > bedX[index] && mouseX < bedX[index] + bedImage.width && mouseY > bedY[index] && mouseY < bedY[index] + bedImage.height) {

            //chooses a random monster image and floor rounds the random number down to a whole number to match a spot in the array 
            monsterChoice = monsterImage[floor(random(monsterImage.length))];

            //monster pops up on bed 
            monsterPopUp = true;
        }
    }
}