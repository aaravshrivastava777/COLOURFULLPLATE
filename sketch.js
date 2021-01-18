var fixedRect,movingRect ,fixedRect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
 fixedRect2 =createSprite(300 ,200,50,80);
 fixedRect2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  
  }
  else if(isTouching(movingRect,fixedRect2)){movingRect.shapeColor="green";
  fixedRect2.shapeColor="green";
  
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="yellow";
    fixedRect2.shapeColor="pink";
  }
  drawSprites();
}
