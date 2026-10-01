/**
 * Class #4 (technically 2 4 me)
 * Bella Perez
 * 
 * 
 * Variables intro w p5 ;-;
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//creating creature objects XD
let creature = {
    x:150,
    y:150,
    w:120,
    h:120,

    //eye
    eye:{
        fillColor:"#fffcfc",
        size:120/3.5,
        center_x:150,
        center_y:150
       },

       fillStates:{
        happy:"#7b44c3",
        sad: "#115386",
        angry: "#811717",
        neutral:"#d9eb86"
       },

       currentFill:"#d9eb86"

}


function setup() {
    //create canvas :p
    createCanvas(500,500);
}


/**
 * Class things -->  
*/
function draw() {

    let distance = dist(creature.x,creature.y,mouseX,mouseY);   
    let mouseIsMoving = (movedX > 0 || movedY > 0);
    console.log(distance); 

    if(distance<creature.w/2 && mouseIsMoving){
        creature.currentFill = creature.fillStates.angry;

    }

    else{
        creature.currentFill = creature.fillStates.neutral;
    }



    //or if (mouseIsPressed) will be auto true 
     //if(mouseIsPressed === true){
        //creature will turn angry (change fill color to angry variable)
        //creature.currentFill = creature.fillStates.angry;
   // }

    //else if(keyIsPressed){
    //    creature.currentFill = creature.fillStates.happy;
    //}

    //else{
    //    creature.currentFill = creature.fillStates.neutral;
    //}

    background("black");
    push ();
    //body
    fill(creature.currentFill);
    ellipse(creature.x,creature.y,creature.w,creature.h);

    fill(creature.eye.fillColor);

    //left eye
    ellipse(creature.eye.center_x-creature.eye.size,creature.eye.center_y,creature.eye.size,creature.eye.size);
    //right eye
    ellipse(creature.eye.center_x+creature.eye.size,creature.eye.center_y,creature.eye.size,creature.eye.size);

    pop ();
}