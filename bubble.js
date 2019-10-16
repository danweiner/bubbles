// the Bubble class
class Bubble {
  // arguments to set x, y, and radius
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    // this will control the fill of the bubble when clicked
    this.brightness = 0;
    // this will allow the bubble to be clicked and unclicked
    this.on = false;
  }
  
  // display the bubble on the canvas
  show() {
    // white border of the bubble
    stroke(255);
    strokeWeight(3);
    
    // when clicked, bubble turns red
    fill(this.brightness, 0, 150, 50);
    
    // the bubble is a circle located at this.x and this.y
    ellipse(this.x, this.y, this.r*2)
    
  }
  
  move() {
    // make the bubble shake randomly left to right and up and down 
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
  }
  
  edges() {
    // bubbles will bounce off the walls
    if (this.x + this.r > width) {
      this.x = width - this.r;
    } else if (this.x - this.r < 0)
    {
      this.x = this.x + this.r;
    } else if (this.y + this.r > height) {
      this.y = height - this.r;
    } else if (this.y - this.r < 0) {
      this.y = this.y + this.r;
    }
  }
  
  contains(x, y) {
    let d = dist(this.x, this.y, x, y)
    if (d < this.r) {
      // if the bubble has not been clicked yet
      if (!this.on) {
      // make the bubble red
        this.brightness = 255;
        this.on = true;
      } else {
        // unclick bubble
        this.on = false;
        // get rid of red
        this.brightness = 0
      }
    
    }
  }
}