 var bgi,sleep,brushA,gymA,eatA,drinkA,moveA
 var ast,
function preload(){
  bgi=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brushA=loadAnimation("brush.png");
  gymA=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  bathA=loadAnimation("bath1.png","bath2.png");
  eatA=loadAnimation("eat1.png","eat2.png");
  drinkA=loadAnimation("drink1.png","drink2.png");
  moveA=loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(600, 600);
  ast = createSprite(300,230);
  ast.addAnimation("sleeping",sleep);
  ast.addAnimation("brushing",brushA);
  ast.addAnimation("gymming",gymA);
  ast.addAnimation("eating",eatA);
  ast.addAnimation("drinking",drinkA);
  ast.addAnimation("moving",moveA);
  ast.addAnimation("bathing",bathA);
  ast.scale =0.9;
}

function draw() {
  background(bgi);
   if(keyDown("UP_ARROW")){ 
    ast.changeAnimation("brushing");
  }
  if(keyDown("DOWN_ARROW")){ 
    ast.changeAnimation("gymming");
  }
  if(keyDown("LEFT_ARROW")){ 
    ast.changeAnimation("eating");
  }
  if(keyDown("LEFT_ARROW")){ 
    ast.changeAnimation("bathing");
  }
  if(keyDown("M")){ 
    ast.changeAnimation("moving");
    ast.velocityY=2
    ast.velocityX=4
  }
  
  drawSprites();

}