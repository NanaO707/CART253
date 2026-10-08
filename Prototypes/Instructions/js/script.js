/**
 * Instructions Assignment #2  
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring bg color variable (baby blue!)
let bgColor = "#7faac5";
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    //creating a canvas
    createCanvas(800,800);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //making a cute little home 
    push ();
    //applying blue bg color
    background(bgColor);
    //base house fill using hexcodes
    fill("#231410");
    //using p5 to center base shape
    rectMode(CENTER);
    rect(400,400,height/2, width/2);

    fill("#b290aa");
     rectMode(CENTER);
    rect(500,400,40,40);

    fill("#b290aa");
     rectMode(CENTER);
    rect(600,400,40,40);

    fill("#b290aa");
     rectMode(CENTER);
    rect(400,600,40,40);

    fill("#b290aa");
     rectMode(CENTER);
    rect(400,500,40,40);
    pop (); 


}