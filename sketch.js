// declare a bubble object
let bubble;
let bubbles = [];

function setup() {
  createCanvas(400, 400);
  // create the bubble object - does not need 
  // any arguments bc they are set in constructor
  for (let i = 0; i < 10; i++) {
    let x = random(0, width)
    let y = random(0, height)
    bubbles[i] = new Bubble( x, y, 25);
  }
}

function draw() {
  // black background
  background(0);
  
  for (let i = 0; i < bubbles.length; i++) {
  // display the bubble
    bubbles[i].show();
  // move the bubble randomly around the screen
    bubbles[i].move();
  // move bubbles to other edge
    bubbles[i].edges()
  }
  
}

