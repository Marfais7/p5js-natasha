function setup () {
  resizeCanvas(300, 300);
  
}

var position = new p5.Vector(10, 10);

function draw() {
  
  var mouse = new p5.Vector(mouseX, mouseY);
  var difference = mouse.sub(position);
  difference.normalize();
  
  position.add(difference);
  
  ellipse(position.x, position.y, 5, 5);
}
