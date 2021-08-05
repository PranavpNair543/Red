var ball 





function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,20,10)



}

function draw() 
{
  background(30);




if (keyIsDown(UP_ARROW))
{
  background('blue');
  
}



if (keyIsDown(DOWN_ARROW))
{
  background('red');
  
}
if (keyIsDown(RIGHT_ARROW))
{
  background('yellow');
  
}



if (keyIsDown(LEFT_ARROW))
{
  background('green');
  
}

drawSprites();
}