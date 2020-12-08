const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var count;
var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  count = 0

  obj1 = new Ground(200,200,30,30);
  ground = new Ground(700,400,800,30);

  box1 = new Box(330,235,30,40)
  box2 = new Box(360,235,30,40)
  box3 = new Box(390,235,30,40)
  box4 = new Box(420,235,30,40)
  box5 = new Box(450,235,30,40)
  box6 = new Box(360,195,30,40)
  box7 = new Box(390,195,30,40)
  box8 = new Box(420,195,30,40)
  box9 = new Box(390,155,30,40)

  polygon = Bodies.circle(50,200,20)
  imageMode(CENTRE)
  image("polygon.png",polygon.position.x,polygon.position.y,40,40);
  World.add(world,polygon)
  
   
  slingshot = new SlingShot(this.polygon,{x:100,y:200})

  a=height;
  circles.push(width/2)
}

function draw() {

  if(backgroundImg) 
  background(backgroundImg);
  
  
  a=a-1;

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
async function getBackgroundImage() {
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
console.log(response)

var responseJSON = await response.json();
console.log(responseJSON)

var dateTime = responseJSON.datetime
console.log(dateTime);

var hour = dateTime.slice (11,13)
console.log(hour);

if (hour >=06 && hour<=17){
   bg = (255)
}
else{
  bg = (0)

}
backgroundImg = loadImage(bg)
} 
