var car;
var wall;
function setup() {
  createCanvas(800,400);
  car=createSprite(400, 200, 50, 50);
  wall=createSprite(400, 200, 50, 50);


}

function draw() {
  car.velocityX=2;
  car.velocityY=0;

  car=shapeColour="red";
  wall=shapeColour="255";


  background(255,255,255);  
  drawSprites();
}