
function preload() {
    img1 = loadImage("assets/tiger dream.jpg");
    img2 = loadImage("assets/Green room.png");
    img3 = loadImage("assets/Photo.png");
    img4 = loadImage("assets/Diary.png");
    img5 = loadImage("assets/Diary(2).png");
    img6 = loadImage("assets/Wedding picture.jpg");
    img7 = loadImage("assets/Diary(3).png");
    date = loadFont("assets/PressStart2P-Regular.ttf")
}
function setup() {
    let canvas = createCanvas(1000, 1000);
    canvas.parent("p5_container02");
    imageMode(CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);

    image(img2, 500, 330, 1000, 650);

    push();
    blendMode(EXCLUSION);
    image(img1, 350, 400, 100, 85);
    //filter(BLUR, 13);
    pop();
    image(img3, 80, 250, 75, 90);
    image(img5, 670, 600, 100, 80);

    if (dist(mouseX, mouseY, 350, 400) < 50) {
        noFill();
        strokeWeight(3);
        stroke(255);
        rect(350, 400, 100, 85);

        image(img1, 700, 450, 400, 360);
    }

    if (dist(mouseX, mouseY, 80, 250) < 40) {
        noFill();
        strokeWeight(3);
        stroke(255);
        quad(57, 223, 112, 222, 112, 273, 57, 275);

        image(img6, 280, 300, 300, 440)
    }
    if (dist(mouseX, mouseY, 80, 250) < 40 && mouseIsPressed == true) {
        push();
        textFont(date);
        noStroke();
        fill(200);
        text("1964. 10. 23.", 280, 510);
        pop();
    }

    if (dist(mouseX, mouseY, 670, 600) < 30) {
        noFill();
        strokeWeight(3);
        stroke(255);
        quad(648, 578, 677, 575, 688, 600, 647, 605);

        image(img4, 670, 520, 200, 160);
    }
    if (dist(mouseX, mouseY, 670, 600) < 30 && mouseIsPressed == true) {
        image(img7, 850, 420, 1400, 1150);

    }

    fill(0);
    noStroke();
    text("Click mouse and check for details", 400, 30);
}



