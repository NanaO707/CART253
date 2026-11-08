/**
 * Random Sounds - What a Hoot! 
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//sound effect array
let soundEffects = [];
//sound assest array
let soundAssests = ['135785__henrythetrain__air-rush.wav', '201808__fartheststar__poker_chips6.wav', '338746__cabled_mess__guitar-fragment-14-march-2016.wav', '655834__yevashenpillay__broom-sweep-repeated.wav', 'bark.wav'];

//fixed sound effect amount
const SOUNDEFFECTSAMOUNT = 5;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    //create canvas
    createCanvas(900, 900);

    //
    for (let i = 0; i < SOUNDEFFECTSAMOUNT; i++) {

        soundEffects[i] = createAudio('assets/sounds/' + soundAssests[i]);

    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0);

    random(soundEffects).play();

}