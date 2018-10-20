const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 342;

function setup() {
    createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
}

function draw() {
    /* Set the color of the stroke. */
    stroke(198,157,101);

    /* Don’t fill in the color of the shape */
    noFill();

    /* Begin the shape created by the three vertices. */
    beginShape();
    vertex(291, 1);
    vertex(322, 64);
    vertex(330, 82);
    vertex(352, 122);

    /* End the shape created by the three vertices, without a fill-in color (see line 13). */
    endShape();
}
