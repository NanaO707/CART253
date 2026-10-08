/**
 * Class #5 (technically 3 4 me)
 * Bella Perez
 * 
 * 
 * Events intro w p5 ;-;
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let mouseTriggerBall={
    x:200,
    y:200,
    size:50,
    speed:1,
    fillColor:{
        r:100,
        g:0,
        b:255
    }
}
function setup(){
    createCanvas(500,500);
    background(0);
    setTimeout(changeBallColorToWhite,5000); //5000 = 5sec
    setInterval(changeBallColor,2000);
    setInterval(changeBallSize,1000);
    
  
}

function draw() {
    //setTimeout(changeBallColor,5000); //5000 = 5sec
    background(0);
    //changeBallColor();
    fill(mouseTriggerBall.fillColor.r,
        mouseTriggerBall.fillColor.g,
        mouseTriggerBall.fillColor.b
    )

    ellipse(mouseTriggerBall.x,
        mouseTriggerBall.y,
        mouseTriggerBall.size
    )

    moveBall();

    


    // if(mouseIsPressed){
    //     fill(random(0,255),random(0,255),random(0,255));
    //     ellipse(mouseX,
    //         mouseY,
    //         mouseTriggerBall.size);
    // }
    
}

function changeBallColor(){
    console.log("run time out");
    mouseTriggerBall.fillColor.r = random(255);
    mouseTriggerBall.fillColor.g = random(255);
    mouseTriggerBall.fillColor.b = random(255);
}

function changeBallColorToWhite(){
    console.log("run set intervalt");
    mouseTriggerBall.fillColor.r = 255;
    mouseTriggerBall.fillColor.g = 255;
    mouseTriggerBall.fillColor.b = 255;
}

function changeBallSize(){
    mouseTriggerBall.size +=50;
}

function moveBall(){
    mouseTriggerBall.x = 
    mouseTriggerBall.x + mouseTriggerBall.speed;

}

function keyPressed(event){
    console.log(event.key);
    if(event.key === 'r'){
        mouseTriggerBall.speed = 2;
    }
    
    if(event.key === 's'){
        mouseTriggerBall.fillColor.r = 255;
    }
    
}

// function keyTyped(){
    
// }

// function keyReleased(){
//      mouseTriggerBall.speed = 0;
// } 

// function mousePressed(){
//     mouseTriggerBall.speed = 2;
// }

// function mouseReleased(){
//     mouseTriggerBall.speed = 0; 
// }

// function mouseWheel(){
//     mouseTriggerBall.size = constrain(mouseTriggerBall.size,5,200);
//     //mouseTriggerBall.size += 5;
//     mouseTriggerBall.size -= 5;

// }

function mouseWheel(event){
   //console.log(event);
    // mouseTriggerBall.size = constrain(mouseTriggerBall.size,5,200);
    // //mouseTriggerBall.size += 5;
    mouseTriggerBall.size -= event.deltaY;

}

// function mouseDragged(){
//     mouseTriggerBall.x = mouseX;
// }

// function mouseMoved(){
//     mouseTriggerBall.x = mouseX;
// }
/**
 * The mousePressed() function is AUTOMATICALLY CALLED BY p5
 * whenever the mouse button is pressed down! Handy!
 */

// function mousePressed(){
//     console.log(mouseX,mouseY);

//         fill(random(0,255),random(0,255),random(0,255));
//         ellipse(mouseX,
//             mouseY,
//             mouseTriggerBall.size);
// }




