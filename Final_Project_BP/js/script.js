/**
 * Innocuous Memories: shards of the past
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//reusing the same image 
let shardImg = [];
//all 5 shards
let shards = [];

let pjsImg;
let trashImg;

//user holding pjs
let draggablePjs = false;

// the main mirror scene
let currentMemory = 'mirror';
//button to return to mirror scene
let homeButton;
//the visual graphics
let painting;
//the painting box width,height and x & y 
let paintingBox = {
    x: 460,
    y: 140,
    w: 1000,
    h: 800
}

let pjs = {
    x: 200,
    y: 450,
}

let trashCan = {
    x: 1500,
    y: 100,
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //load images
    shardImg = await loadImage('assets/images/craiyon_223825_image.png');
    pjsImg = await loadImage('assets/images/craiyon_205903_image.png');
    trashImg = await loadImage('assets/images/craiyon_205032_image.png');


    //array of memory shards with each pos and name using a function with parameters
    shards = [
        //5 memory shards
        createShard('Swing', 100, 150),
        createShard('Pjs', 100, 550),
        createShard('Apple Batter', 610, 350),
        createShard('Paint Station', 1200, 150),
        createShard('Fairy Dress Braid', 1200, 550),
    ];

    // creating button to return home 
    homeButton = createButton('Return to missing shards');
    //button pos
    homeButton.position(50, 50);
    //on mouse clicked returns to mirror memory and hides the button
    homeButton.mouseClicked(returnToMirror);
    //default set to hide
    homeButton.hide();

    //referencing p5
    painting = createGraphics(paintingBox.w, paintingBox.h)
    //change painting bg color to white
    painting.background(255);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    //if the current memory is the full broken mirror
    if (currentMemory === 'mirror') {
        //for loop to draw all the shards 
        for (let i = 0; i < shards.length; i++) {
            image(shardImg, shards[i].x, shards[i].y);

        }

    }
    //paint station memory draws the canvas
    else if (currentMemory === 'Paint Station') {
        drawPaintCanvas();
    }
    //pj memory and draws the trashcan and pjs
    else if (currentMemory === 'Pjs') {
        drawPjs();
    }

    else {
        //calls memorytext function
        memoryText();
    }

}
/**
 * draw the paint canvas
*/
function drawPaintCanvas() {

    if (mouseIsPressed && detectObjectOnMouse(paintingBox.x, paintingBox.y, paintingBox.w, paintingBox.h)) {

        //red paint (placeholder)
        painting.stroke(250, 0, 0);
        //line thickness
        painting.strokeWeight(20);

        painting.line(
            //uses pmouse to track the every frame consistently 
            pmouseX - paintingBox.x,
            pmouseY - paintingBox.y,
            mouseX - paintingBox.x,
            mouseY - paintingBox.y
        );
    }
    //shows the image/painting 
    image(painting, paintingBox.x, paintingBox.y);
}
/**
 * placeholder style of each memory name
*/
function memoryText() {
    fill(255);
    textSize(50);
    text(currentMemory, 500, 500);
}

/**
 * Function to create each shard using different names, x & y positions
*/
function createShard(name, x, y) {

    let shard =
    {
        name: name,
        x: x,
        y: y
    };

    return shard;

}
/**
 * Detect if the mouse is in the hitbox for each shard
*/
// function detectShard(shard) {

//     //calculates between the left & right and then -->top/7bottom
//     return mouseX > shard.x &&

//         mouseX < shard.x + shardImg.width &&

//         mouseY > shard.y &&

//         mouseY < shard.y + shardImg.height;
// }

function detectObjectOnMouse(x, y, w, h) {

    //calculates between the left & right and then -->top/7bottom
    return mouseX > x &&

        mouseX < x + w &&

        mouseY > y &&

        mouseY < y + h;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function mousePressed() {

    if (currentMemory === 'mirror') {

        //for loop for every shard and uses the array of shards.
        for (let i = 0; i < shards.length; i++) {

            //if true when you click it the respective memory is shown
            if (detectObjectOnMouse(shards[i].x, shards[i].y, shardImg.width, shardImg.height)) {

                //changes to current memory clicked on shard and shows return button
                currentMemory = shards[i].name;
                homeButton.show();
            }
        }
    }
    //pjs draggable only in its respective memory when clicked
    else if (currentMemory === 'Pjs')
        if (detectObjectOnMouse(pjs.x, pjs.y, pjsImg.width / 2, pjsImg.height / 2)) {
            draggablePjs = true;
        }
}
/**
 * Returns to mirror scene and hides the button
*/
function returnToMirror() {
    currentMemory = 'mirror';
    homeButton.hide();
}
/**
 * detects if the mouse is inside the easel
*/
// function detectPaintCanvas() {

//     //calculates between the left & right and then -->top/7bottom
//     return mouseX > paintingBox.x &&

//         mouseX < paintingBox.x + paintingBox.w &&

//         mouseY > paintingBox.y &&

//         mouseY < paintingBox.y + paintingBox.h;

// }
/**
 * draws the trash and pj images 
*/
function drawPjs() {

    if (draggablePjs === true) {

        pjs.x = mouseX - pjsImg.width / 4;
        pjs.y = mouseY - pjsImg.height / 4;
    }
    //draws trashcan
    image(trashImg, trashCan.x, trashCan.y);
    //drws pjs
    image(pjsImg, pjs.x, pjs.y, pjsImg.width / 2, pjsImg.height / 2);
}
/**
 * on  mouse release the pjs aren't draggable
*/
function mouseReleased() {
    draggablePjs = false;
}