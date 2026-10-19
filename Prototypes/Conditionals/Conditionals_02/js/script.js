/**
 * Fish and Love 
 * Bella Perez
 * 
 * Two little fish live under the water. Type love so they can find each other and swim towards one another!
 * 
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
        left: '#d78c3c',
        right: '#d0d0fd',
    },

    swimming: false,
}

//magic word variables that hold x & y positions, the text color, size and empty string for the word "love"
let magicWord = {
    //empty string
    typed: "",
    size: (60),
    fill: '#c887be',
    x: 895,
    y: 300,

}


/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas.
*/
function setup() {
    //create canvas
    createCanvas(1920, 1080);

}


/**
 * For the draw function,it loops endlessly to call the functions that draw the fish, display the text, and make the fish swim.
*/
function draw() {

    push();
    //bg color 
    background(bgColor);

    //calls the functions that draw the left and right fish
    drawLeftFish();
    drawRightFish();

    //calls function to show typed text
    textDisplay();

    //calls function to make fish swim
    fishSwim();

    pop();


}
/**
 * draws the left fish using an ellipse and a triangle proportioned to the tail and body.
*/
function drawLeftFish() {
    //remove outline 
    noStroke();
    //left fish color is orange 
    fill(fish.fillColor.left);
    // drawing left fish body
    ellipse(fish.leftX, fish.y, fish.w, fish.h);
    //left fish tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.leftX, fish.y,
        fish.leftX - fish.w / 2 - 60, fish.y - 35,
        fish.leftX - fish.w / 2 - 60, fish.y + 35);
}
/**
 * draws the right fish using an ellipse and a triangle proportioned to the tail and body
*/
function drawRightFish() {

    //right fish color white
    fill(fish.fillColor.right);
    //drawing right fish body
    ellipse(fish.rightX, fish.y, fish.w, fish.h);
    //tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.rightX, fish.y,
        fish.rightX + fish.w / 2 + 60, fish.y - 35,
        fish.rightX + fish.w / 2 + 60, fish.y + 35);
}
/**
 * This function is built into p5. It's being used to track that a single basic character type is pressed, turning them to lowercase automatically. 
 * It also tracks if there's more than 4 letters the first letter is removed.
 * When love is typed the fish swim is set to true.
*/
function keyPressed() {

    //takes the key if it's single char 
    if (key.length === 1) {
        //sets the keys to lowercase
        magicWord.typed = magicWord.typed + key.toLowerCase();
    }

    //conditional if there's more than 4 letters it removes the first letter so it stays at 4
    if (magicWord.typed.length > 4) {
        magicWord.typed = magicWord.typed.slice(1);
    }
    //if the user types love than the fish will swim 
    if (magicWord.typed === "love") {

        //fish swim 
        fish.swimming = true;
    }
}
/**
 * Displays the text with color, size, postion, and based on what the user types.
*/
function textDisplay() {

    //fill color for the text
    fill(magicWord.fill);
    //the size of the text
    textSize(magicWord.size);
    //tracks the text typed and position 
    text(magicWord.typed, magicWord.x, magicWord.y);
}
/**
 * This function makes the fish swim and haven't touched they will swim closer until they do.  
*/
function fishSwim() {
    //if fish are swimming and haven't touched they will swim closer until they do 
    if (fish.swimming === true && fish.leftX < fish.rightX - fish.w) {
        //left fish moves right to meet the other fishy
        fish.leftX = fish.leftX + 4;
        //right fish moves left to meet the other fishy
        fish.rightX = fish.rightX - 4;
    }
}


