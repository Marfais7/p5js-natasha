
function setup(){
  createCanvas(500, 600, WEBGL);
}
line(30, 20, 85, 20);
stroke(126);
line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);

function draw(){
background('#fae');
  rotateX(frameCount * 0.07);
  rotateZ(frameCount * 0.01);
  cone(100, 600);


}