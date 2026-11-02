let img;
let x;
let y;

// runs before setup, to load our images & assets
function preload() {
  img = loadImage('SunFlow.jpg');
  // myFont = loadFont(myfont.otf);
}

function setup() {
  createCanvas(600, 600);
  x = 0;
  y = 0;
}

function draw() {
  background(220);
  // image() draws the img with x, y coordinate, an width and  height
  image(img, x, y, 50, 50);
  x++; // x = x + 1
  y++; // y = y + 1
}


