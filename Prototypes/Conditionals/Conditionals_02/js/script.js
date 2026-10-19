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
        white: '#d0d0fd',
    },

    swimming: false,
}

//magic word variables that hold x & y positions, the text color, size and empty string for the word "love"
let magicWord = {

    typed: "",
    size: (40),
    fill: (255),
    x: 200,
    y: 200,

}




/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas.
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

    //calls the functions that draw the left and right fish
    drawLeftFish();
    drawRightFish();

    fill(magicWord.fill);
    textSize(magicWord.size);
    text(magicWord.typed, magicWord.x, magicWord.y);

    //if fish are swimming and haven't touched they will swim closer until they do 
    if (fish.swimming === true && fish.leftX < fish.rightX - fish.w) {
        //left fish moves right to meet the other fishy
        fish.leftX = fish.leftX + 4;
        //right fish moves left to meet the other fishy
        fish.rightX = fish.rightX - 4;
    }

    pop();


}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawLeftFish() {
    //remove outline 
    noStroke();
    //left fish color is orange 
    fill(fish.fillColor.orange);
    // drawing left fish body
    ellipse(fish.leftX, fish.y, fish.w, fish.h);
    //left fish tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.leftX, fish.y,
        fish.leftX - fish.w / 2 - 60, fish.y - 35,
        fish.leftX - fish.w / 2 - 60, fish.y + 35);
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawRightFish() {

    //right fish color white
    fill(fish.fillColor.white);
    //drawing right fish body
    ellipse(fish.rightX, fish.y, fish.w, fish.h);
    //tail calculates the distance between the x position of the tail and stays attached to the body 
    triangle(fish.rightX, fish.y,
        fish.rightX + fish.w / 2 + 60, fish.y - 35,
        fish.rightX + fish.w / 2 + 60, fish.y + 35);
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

        fish.swimming = true;
    }
}


