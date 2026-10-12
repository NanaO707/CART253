/**
 * Let me in...
 * Bella Perez
 * 
 * A mysterious door appears before you. 
 * A range of pretty color changes is bestowed upon you. 
 * Weirdly enough, the door shakes viciously, almost like someone is locked inside… 
 */
// 
//bg color variable
let bgColor = '#000000';

//variables for all parts of the door
let door = {
    //door pos on the canvas
    x: 960,
    y: 540,

    //door size by height and width
    height: 400,
    width: 200,

    knob: {
        //diameter/size of the knob
        size: 40,
        //doorknob shake amount 
        shake: 5,

    }
    ,

    //the door and doorknob colors
    fillColor: {
        brown: '#432712',
        black: '#000000',
        green: '#1c7428',
        orange: '#e67727',
        purple: '#382261'
    }
}
/**
 * The setup only contains creating the canvas and runs once.
*/
function setup() {

    //create canvas
    createCanvas(1920, 1080);

}

/**
 * Draw contains the code that will endlessly loop per p5. Draws the door and doorknob
*/
function draw() {


    //add background color
    background(bgColor);


    //draw rectangle(door) from its center
    rectMode(CENTER);

    //call door color change function
    doorColorChange();


    //door dimensions and position 
    rect(door.x, door.y, door.width, door.height);

    //remove outline
    noStroke();

    //fill color brown (doorknob)
    fill(door.fillColor.brown);

    //changing the doorknob values so it moves as one with door. Added doorknob shake that randomly shakes between values -5 to 5
    circle(door.x + door.width / 3 + random(-door.knob.shake, door.knob.shake), door.y + random(-door.knob.shake, door.knob.shake), door.knob.size);

}

/**
 * Function that conatins the pallete lerp that runs every 10secs 
*/
function doorColorChange() {
    //palette lerp (referencing p5). 4 colors appear every 10secs
    let doorColor = (paletteLerp([[door.fillColor.black, 0.02], [door.fillColor.green, 0.05], [door.fillColor.orange, 0.25], [door.fillColor.purple, 1],], millis() / 10000 % 1));

    //fill color with palette lerp
    fill(doorColor);
}
