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
 * The setup function is used as a base in p5 and will only run once. referncing p5's code for faces, and lerp color
*/
function setup() {
    //creating a canvas
    createCanvas(1920, 1080, WEBGL);

    // Create a p5.Geometry object. (experimenting with 3D shapes
    geometryObject = buildGeometry(function () { cylinder(); });

}


/**
 * referncing p5's faces, and color lerp
*/
function draw() {
    push();

    //bgcolor
    background(bgColor);

    // Enable orbiting with the mouse.
    orbitControl();

    // Style the p5.Geometry object.
    noStroke();

    // Set a random seed.
    randomSeed(52);

    // Iterate over the faces array.
    for (let face of geometryObject.faces) {

        //declaring lerp colors
        let magenta = color('#b5129d');
        let blue = color('#0097f5');


        //experimenting with lerp color (creates an emmisive glow)
        let mixedColors = lerpColor(blue, magenta, random(0, 1));

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