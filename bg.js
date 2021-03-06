class Bg {
    constructor(x, y, r) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          'density':1.2
          
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("snow3.jpg")
      this.body = Bodies.circle(this.x,this.y,this.r, options);
      World.add(world, this.body);
    }
    display(){
      var stonePos = this.body.position;
      push();
      translate(stonePos.x, stonePos.y);
      //rectMode(CENTER)
      rotate(this.body.angle)
      fill(225,0,225)
      imageMode(CENTER);
      ellipseMode(CENTER)
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
  };
  
  