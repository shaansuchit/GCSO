var car;
var wall;

function setup() {
  createCanvas(800,400);
car = createSprite(110,300,200,100);
wall= createSprite(800,100,200,900);

car.shapeColor="blue";
wall.shapeColor="yellow";
}

function draw() {
  background(255,255,255);  
  if (keyDown){
    
    car.velocityX=7;
  }
   
if  (car.collide(wall)){
  car.shapeColor="green";
  wall.shapeColor="green";
}

  drawSprites();
}