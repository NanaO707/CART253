/**
 *Snake Wonders
 *Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring snake x & y head position, speed x & y and color.
let snake = {

    headX: 450,
    headY: 450,
    headSize: 24,

    speedX: 0,
    speedY: 0,
    speed: 3,

    fillColor: {
        green: '#1d7c18',
    },

}


/**
 *  The setup function is used as a base in p5 and will only run once. Contains creating a canvas.
*/
function setup() {
    //create canvas
    createCanvas(900, 900);


}

/**
 * The draw function loops endlessly per p5. It draws the snake head and sets snake head movement along the x & y axis. 
*/
function draw() {

    //bg color is black
    background(0);

    //sets snake head movement along the x & y axis  
    snake.headX = snake.headX + snake.speedX;
    snake.headY = snake.headY + snake.speedY;

    //no outline
    noStroke();
    //sets color to green
    fill(snake.fillColor.green);
    //snake head drawn 
    circle(snake.headX, snake.headY, snake.headSize);

}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function keyPressed() {
    //when w is pressed the snake moves upwards 
    if (key === 'w') {
        snake.speedY = -snake.speed;
    }

    if (key === 'a') {
        snake.speedX = -snake.speed;
    }
    //when s is pressed the snake moves downwards 
    if (key === 's') {
        snake.speedY = snake.speed;
    }

    if (key === 'd') {
        snake.speedX = snake.speed;
    }
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function keyReleased() {

    if (key === 'w' || key === 's') {
        snake.speedY = 0;
    }

    if (key === 'a' || key === 'd') {
        snake.speedX = 0;
    }
}