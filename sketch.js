var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,100,50,90);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 3;
  
  movingRect = createSprite(200,350,50,100);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -3;
}

function draw() {
background(255,255,255);

if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);
  }

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  ){
    movingRect.velocityx = movingRect.velocityx*(-1);
    fixedRect.velocityx= fixedRect.velocityx*(-1);
}

  // movingRect.x = mouseX;
// movingRect.y = mouseY;
  


drawSprites();
}

function isTouching(){

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2  ) {
    
    
      movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
  
  } else {
        movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green";
      }
}



