let i = 1;
var state = 0;
let img1;
let img2;
let img3;
let img4;
let img5;

function preload() {
    img1 = loadImage("assets/Envelop(1).png");
    img2 = loadImage("assets/Envelop(2).png");
    img3 = loadImage("assets/letter.jpg");
    img4 = loadImage("assets/accident report.jpg");
    img5 = loadImage("assets/Injure(2).png");
}

function setup() {
    let canvas = createCanvas(1400, 800);
    canvas.parent("p5_container06");
}

function draw() {
    background(0);

    if (state == 0) {
        draw0();
    }
    if (state == 1) {
        draw1();
    }
    if (state == 2) {
        draw2();
    }
    if (state == 3) {
        draw3();
    }
    if (state == 4) {
        draw4();
    }





    fill(255);
    noStroke();
    strokeWeight(2);
    text("Click the mouse to open it", 20, 20);
}

function mouseClicked() {
    state += 1;
}

function draw0() {
    image(img1, 380, 150, 500, 450);
}
function draw1() {
    image(img2, 380, 150, 500, 450);
}
function draw2() {
    image(img3, 380, 120, 500, 700);
}
function draw3() {
    image(img4, 380, 120, 500, 500);
}
function draw4() {
    image(img5, 380, 120, 500, 600);
}