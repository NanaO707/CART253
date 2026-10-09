/**
 * Instructions Assignment #2 (Abstract Prototype)
 * Bella Perez
 * 
 * I created a stained glass, trippy effect that is more abstract than super clear using a zoomed in cylinder with a lerp effect.
 * 
 */

"use strict";

//declaring bg color black
let bgColor = 'black';

let geometryObject;

/**
 * The setup function is used as a base in p5 and will only run once. Contains creating a canvas and creating a geometric object referencing p5's faces code.
*/
function setup() {
    //creating a canvas
    createCanvas(1030, 530, WEBGL);

    // Create a p5.Geometry object. (experimenting with 3D shapes
    geometryObject = buildGeometry(function () { cylinder(); });

}


/**
 * For the setup, I used p5's respective resources and code from camera, faces, and lerp color.
 * I adjusted the position of the camera to zoom in on the geometry cylinder shape.
 * And to restrict the user from zooming out too much, where it loses the effect.
 * In the faces code, I removed some effects as I found them unnecessary for the final design.
 *  I wanted black border lines to imitate a stained glass look.
 * The lerp to achieve a pretty color transition
*/

function draw() {
    push();

    //bgcolor
    background(bgColor);

    //camera position (zoomed in for a trippy effect)  
    camera(10, 10, 80);


    // Enable orbiting with the mouse.
    orbitControl();

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