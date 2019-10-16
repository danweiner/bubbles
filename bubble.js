// the Bubble class
class Bubble {
  // arguments to set x, y, and radius
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  // display the bubble on the canvas
  show() {
    // white border of the bubble
    stroke(255);
    strokeWeight(3);
    
    // black center of the bubble
    fill(0);
    
    // the bubble is a circle located at this.x and this.y
    ellipse(this.x, this.y, this.r*2)
    
  }
  
  move() {
    // make the bubble shake randomly left to right and up and down 
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
  
  edges() {
    // move bubbles to other side of the screen
    // if bubble will move off of screen
    if (this.x > width) {
      this.x = 2*this.r;
    } else if (this.x < 0) {
      this.x = width - 2*this.r;
    } else if (this.y > height) {
      this.y = 2*this.r;
    } else if (this.y < 0) {
      this.y = height-2*this.r;
    }
  }
}