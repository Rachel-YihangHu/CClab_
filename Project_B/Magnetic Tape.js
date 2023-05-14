let song1;
let song2;
let mic;
let img;
let img2;
let img3;
let img4;

let x = 0;

function preload() {
    song1 = loadSound("assets/wwma.mp3");
    song2 = loadSound("assets/als.mp3");
    img = loadImage("assets/Rose.png");
    img2 = loadImage("assets/Radio(1).png");
    img3 = loadImage("assets/Radio(2).png");
    img4 = loadImage("assets/Button.png");
    hint = loadFont("assets/PressStart2P-Regular.ttf");
}


function setup() {
    let canvas = createCanvas(1000, 1000);
    canvas.parent("p5_container04");

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(255);
    image(img3, 100, 100, 600, 600);

    let level = mic.getLevel();
    x = x + level * 20;
    fill(212, 59, 59);
    stroke(212, 59, 59);
    strokeWeight(4)
    line(10, 600, 990, 600);
    image(img, x, 520, 200, 200);
    circle(10, 600, 6);
    circle(990, 600, 6)
    fill(180);
    noStroke()
    text("0:00", 10, 620);
    text("3:42", 970, 620);
    if (x > 940) {
        createCanvas(0, 0)
        song1.pause();
        song2.pause();
    }
    push();
    textFont(hint);
    textSize(20);
    fill(0);
    text("Click the Play Key", 20, 30);
    pop();

}

if (x > 200) {
    createCanvas(0, 0)
}

function mousePressed() {
    if (song1.isPlaying()) {
        song1.pause();
        song2.play();
    }
    else {
        song1.play();
        song2.pause();
    }

}