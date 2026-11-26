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

//pj memory images
let pjsImg;
let trashImg;

//bowl image for apple muffins memory
let bowlImg;
let batter;

//user holding pjs
let draggablePjs = false;
//variable for if the pj's are in the garbage
let pjsInGarbage = false;

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

let batterBox = {
    x: 660,
    y: 240,
    w: 600,
    h: 600
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
    bowlImg = await loadImage('assets/images/craiyon_141437_image.png');


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
    painting = createGraphics(paintingBox.w, paintingBox.h);
    //change painting bg color to white
    painting.background(255);


    //referencing p5
    batter = createGraphics(batterBox.w, batterBox.h);

    //no outline
    batter.noStroke();
    //fill color
    batter.fill('#e4be7b');

    //batter leftover chunk for now
    batter.ellipse(305, 335, 280, 250);

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
    else if (currentMemory === 'Apple Batter') {
        drawBatter();
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
    // detects if the mouse is inside the easel and that mouse pressed is true
    if (mouseIsPressed && detectObjectOnMouse(paintingBox.x, paintingBox.y, paintingBox.w, paintingBox.h)) {

        //red paint (placeholder)
        painting.stroke(250, 0, 0);
        //line thickness
        painting.strokeWeight(20);

        painting.line(
            //uses pmouse to track every frame consistently 
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
 * One function that detects when the mouse is on an object.
*/
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

            //if true when you click it the respective memory is shown and detects if the mouse is in the hitbox for each shard
            if (detectObjectOnMouse(shards[i].x, shards[i].y, shardImg.width, shardImg.height)) {

                //changes to current memory clicked on shard and shows return button
                currentMemory = shards[i].name;
                homeButton.show();
            }
        }
    }
    //pjs draggable only in its respective memory when clicked
    else if (currentMemory === 'Pjs') {
        //detects if the mouse is on the pjs
        if (detectObjectOnMouse(pjs.x, pjs.y, pjsImg.width / 2, pjsImg.height / 2)) {
            //pjs become draggable
            draggablePjs = true;
        }
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
 * draws the trash and pj images 
*/
function drawPjs() {
    //if the pjs are draggable then the pj x & y calculates the movement and the center of it's axis
    if (draggablePjs === true) {

        pjs.x = mouseX - pjsImg.width / 4;
        pjs.y = mouseY - pjsImg.height / 4;
    }

    //if pjs are not in the garbage can then the pjs image is drawn
    if (pjsInGarbage === false) {
        //drws pjs
        image(pjsImg, pjs.x, pjs.y, pjsImg.width / 2, pjsImg.height / 2);
    }
    //placeholder text :p
    else {
        fill(255);
        textSize(50);
        text('bleh bleh bleh', 500, 500);
    }
    //draws trashcan
    image(trashImg, trashCan.x, trashCan.y);
}
/**
 * on mouse release the pjs aren't draggable. When on the trashcan the pj's are not visible.
*/
function mouseReleased() {
    //if pjs are draggable on the trash can
    if (draggablePjs === true && detectObjectOnMouse(trashCan.x, trashCan.y, trashImg.width, trashImg.height)) {
        //pjs aren't drawn
        pjsInGarbage = true;
    }

    draggablePjs = false;
}
/**
 * detects if the mouse is inside the batter and that mouse pressed is true.
*/
function drawBatter() {

    if (mouseIsPressed && detectObjectOnMouse(batterBox.x, batterBox.y, batterBox.w, batterBox.h)) {

        //sets erase to full strength referencing p5
        batter.erase(255);

        //stroke set to visible 
        batter.stroke(255);
        //line thickness
        batter.strokeWeight(60);

        batter.line(
            //uses pmouse to track every frame consistently 
            pmouseX - batterBox.x,
            pmouseY - batterBox.y,
            mouseX - batterBox.x,
            mouseY - batterBox.y
        );

        //stops erasing
        batter.noErase();
    }
    //draws bowl
    image(bowlImg, batterBox.x, batterBox.y, batterBox.w, batterBox.h);
    //draws batter
    image(batter, batterBox.x, batterBox.y);
}