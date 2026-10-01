/**
 * Conditionals
 * Bella Perez
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 * 
 */
const target = {
    x:200,
    y:200,
    size:40,
    fill:"#b290aa",

    fillState:{
        colorChange:"#47928b",
        neutral:"#b290aa"
    }

}

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};



/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  drawTarget();
  checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

function drawTarget(){
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x,target.y,target.size);
    pop ();
}

function checkTarget(){
    let d = dist(puck.x,puck.y,target.x,target.y);
    if (d< puck.size/2 && target.size/2){

        if(puck.x < target.x){
            target.fill = target.fillState.colorChange;
        }

        else{
            target.fill= target.fillState.neutral;
        }
    }


}

/**
 * Displays the puck circle
 */

//function movePuck() {
//}

function drawPuck() {

    let d = dist(puck.x,puck.y,user.x,user.y);
    if (d<user.size/2 && puck.size/2){

    if(user.x < puck.x  ){
        puck.x = puck.x + 10;
    }

    else if(user.x > puck.x){
        puck.x = puck.x -10;
    }

        
    }
    
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);

  pop();
}