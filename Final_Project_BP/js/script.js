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
let shards = [];

let currentMemory = 'mirror';
let homeButton;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    //load image
    shardImg = await loadImage('assets/images/craiyon_223825_image.png');

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


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    if (currentMemory === 'mirror') {
        //for loop to draw all the shards 
        for (let i = 0; i < shards.length; i++) {
            image(shardImg, shards[i].x, shards[i].y);

        }

    }

    else {
        //placeholder style
        fill(255);
        textSize(50);
        text(currentMemory, 500, 500);
    }

}

/**
 * function to create each shard using different names, x & y positions
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
function detectShard(shard) {

    //calculates between the left & right and then -->top/7bottom
    return mouseX > shard.x &&

        mouseX < shard.x + shardImg.width &&

        mouseY > shard.y &&

        mouseY < shard.y + shardImg.height;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function mousePressed() {

    if (currentMemory === 'mirror') {

        //for loop for every shard and uses the array of shards.
        for (let i = 0; i < shards.length; i++) {

            //if true when you click it prints the respective name
            if (detectShard(shards[i])) {

                //placeholder for testing
                currentMemory = shards[i].name;
                homeButton.show();
            }
        }
    }
}

function returnToMirror() {
    currentMemory = 'mirror';
    homeButton.hide();
}