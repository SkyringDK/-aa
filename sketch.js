
var box;



function setup() {
  createCanvas(1000,650);

box = createSprite (200, 200, 50, 50);


}

function draw() 
{

  if (keyIsDown(UP_ARROW)){
    background("black");
    box.y -= 3;
  }
  drawSprites();



if (keyIsDown(RIGHT_ARROW)){

  box.x += 3;
}
if (keyIsDown(LEFT_ARROW)){

  box.x -= 3;
}

if (keyIsDown(DOWN_ARROW)){

  box.y += 3;
}
}




















































































