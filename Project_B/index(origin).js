let img1;
let img2;
let img3;
let img4;
let img5;
function preload() {
  img1 = loadImage("assets/Homepage(1).png");
  img2 = loadImage("assets/Echo.png");
  img3 = loadImage("assets/Bread (1).png");
  img4 = loadImage("assets/Magnetic tape.png");
  img5 = loadImage("assets/Butterflies.png");
}

function setup() {
  let canvas = createCanvas(1500, 1500);
  canvas.parent("p5_container01");
}

function draw() {
  background(255);
  image(img1, -220, -70, 1400, 1000);
  console.log(mouseX);
  text("positionX:" + mouseX, 0, 20);
  console.log(mouseY);
  text("positionY:" + mouseY, 0, 40);

  push()
  if (dist(mouseX, mouseY, 375, 128) < 100) {
    imageMode(CENTER);
    image(img2, 480, 430, 1400, 1000);
  }
  pop()

  push()
  if (dist(mouseX, mouseY, 620, 170) < 100) {
    imageMode(CENTER);
    image(img3, 480, 430, 1400, 1000);
  }
  pop()

  push()
  if (dist(mouseX, mouseY, 580, 300) < 100) {
    imageMode(CENTER);
    image(img4, 480, 430, 1400, 1000);
  }
  pop()

  push()
  if (dist(mouseX, mouseY, 750, 278) < 100) {
    imageMode(CENTER);
    image(img5, 480, 430, 1400, 1000);
  }
  pop()


}
