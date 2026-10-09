/**
 * Instructions Assignment #2 (Abstract Prototype)
 * Bella Perez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring bg color variable (baby blue!)
let bgColor = 'black';

let geometryObject;

/**
 * The setup function is used as a base in p5 and will only run once. referncing p5's code for faces, and lerp color.
*/
function setup() {
    //creating a canvas
    createCanvas(1920, 1080, WEBGL);

    // Create a p5.Geometry object. (experimenting with 3D shapes)
    geometryObject = buildGeometry(function () { plane(); });

}


/**
 * referncing p5's faces, and color lerp
*/
function draw() {
    push();

    background(bgColor);

    // Enable orbiting with the mouse.
    orbitControl();

    // Turn on the lights.
    //lights();

    // Style the p5.Geometry object.
    noStroke();

    // Set a random seed.
    randomSeed(5);

    // Iterate over the faces array.
    for (let face of geometryObject.faces) {

        let blue = color('#1244b5');
        let red = color('#b53b12');
        let green = color('#25b512');

        //experimenting with lerp color (creates an emmisive glow)
        let mixedColors = lerpColor(blue, red, green, random(0, 2));

        // Style the face.
        fill(mixedColors);

        // Draw the face.
        beginShape();
        // Iterate over the vertices that form the face.
        for (let f of face) {
            // Get the vertex's p5.Vector object.
            let v = geometryObject.vertices[f];
            vertex(v.x, v.y, v.z);
        }
        endShape();

    }

    pop();


}