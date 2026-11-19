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
let homeButton;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    //create canvas
    createCanvas(1920, 1080);

    shardImg = await loadImage('assets/images/craiyon_223825_image.png');

    let memoryNames = [
        'Swing',
        'Pjs',
        'Apple Batter',
        'Paint Station',
        'Fairy Dress Braid'
    ];





}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    //5 memory shards
    image(shardImg, 100, 150);
    image(shardImg, 100, 550);
    image(shardImg, 610, 350);
    image(shardImg, 1200, 150);
    image(shardImg, 1200, 550);

}