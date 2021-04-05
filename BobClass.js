class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'isStatic':true,
          'friction':5,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y, 26, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3)
      stroke("black")
      fill("maroon");
      ellipse(0, 0, 26);
      pop();
    }
  };