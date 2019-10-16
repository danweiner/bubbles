// initialize array of bubbles
let bubbles = [];

function setup() {
  createCanvas(400, 400);


  for (let i = 0; i < 5; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(15, 50)
    let bubble = new Bubble(x, y, r)
    bubbles.push(bubble)
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

  // no more than 50 bubbles on canvas
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }

}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].contains(mouseX, mouseY);
  }
 

}