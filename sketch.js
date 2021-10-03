var box
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,10,10)
console.log(box)

}

function draw() 
{
  background('blue');

if(keyIsDown(RIGHT_ARROW)){
box.position.x+=4


}
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-4
  
  
  }



drawSprites()}
