/**
 *Snake Wonders
 *Bella Perez
 * 
 * Snake wonders await please press WASD to move your snake! 
 * 
 */

"use strict";

//declaring snake x & y head position, speed x & y and color. 
//Adding body segement variable for x & y. Seperated in 3 parts. 
let snake = {

    headX: 450,
    headY: 450,
    headSize: 36,

    speedX: 0,
    speedY: 0,
    speed: 3,

    firstBodyX: 450,
    firstBodyY: 450,

    secondBodyX: 450,
    secondBodyY: 450,

    thirdBodyX: 450,
    thirdBodyY: 450,

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

    //Uses lerp referncing p5.
    snake.firstBodyX = lerp(snake.firstBodyX, snake.headX, 0.1);
    snake.firstBodyY = lerp(snake.firstBodyY, snake.headY, 0.1);

    snake.secondBodyX = lerp(snake.secondBodyX, snake.firstBodyX, 0.1);
    snake.secondBodyY = lerp(snake.secondBodyY, snake.firstBodyY, 0.1);

    snake.thirdBodyX = lerp(snake.thirdBodyX, snake.secondBodyX, 0.1);
    snake.thirdBodyY = lerp(snake.thirdBodyY, snake.secondBodyY, 0.1);

    //no outline
    noStroke();
    //sets color to green
    fill(snake.fillColor.green);

    //snake head drawn from body to head 
    circle(snake.thirdBodyX, snake.thirdBodyY, 20);
    circle(snake.secondBodyX, snake.secondBodyY, 24);
    circle(snake.firstBodyX, snake.firstBodyY, 28);
    circle(snake.headX, snake.headY, snake.headSize);


}
/**
 * This function runs every frame that a key is pressed and built into p5. Changes the values of x and y speed depending on the 4 keys that are pressed. Allows for movement in 4 directions.
*/
function keyPressed() {
    //when w is pressed the snake moves upwards 
    if (key === 'w') {
        snake.speedY = -snake.speed;
    }
    //when a is pressed the snake moves to the left
    if (key === 'a') {
        snake.speedX = -snake.speed;
    }
    //when s is pressed the snake moves downwards 
    if (key === 's') {
        snake.speedY = snake.speed;
    }
    //when d is pressed the snake moves to the right
    if (key === 'd') {
        snake.speedX = snake.speed;
    }
}

/**
 *  This function runs every frame that a key is released and built into p5. Changes the values of x and y speed and sets it to 0 (stops moving) on keyReleased.
*/
function keyReleased() {

    //if w or s is pressed. Along the y axis on key release the snake stops moving.
    if (key === 'w' || key === 's') {
        snake.speedY = 0;
    }
    //if a or d is pressed. Along the x axis on key release the snake stops moving. 
    if (key === 'a' || key === 'd') {
        snake.speedX = 0;
    }
}