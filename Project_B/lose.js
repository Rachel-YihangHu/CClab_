let img;

function preload() {
    img = loadImage("assets/lose(2).jpg")
}
function setup() {
    let canvas = createCanvas(1500, 1500);
    canvas.parent("p5_container07");
}

function draw() {
    background(255);
    image(img, 100, 10, 800, 680);
}
