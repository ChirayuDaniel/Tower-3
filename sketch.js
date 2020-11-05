const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2;
var box, box2,box3,box4,box5, box6, box7, box8,box9,box10
var polygon, polyImage
var slingshot
function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(350,750, 600, 20);
  ground2 = new Ground(600,100,450,20); 

  box = new Box(218,650,60,60)
  box2 = new Box(278,650,60,60)
  box3 = new Box(338,650,60,60)
  box4 = new Box(398,650,60,60)
  box5 = new Box(242,590,60,60)
  box6 = new Box(302,590,60,60)
  box7 = new Box(362,590,60,60)
  box8 = new Box(265,530,60,60)
  box9 = new Box(325,530,60,60)
  box10 = new Box(292,470,60,60)
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)
  slingshot = new Slingshot(this.polygon,{x:100, y:200})
  
}

function draw() {
  background("black");  
  
  noStroke();
  textSize(35);
  fill("white")
  text("Score" + ScopedCredential, width-300,50)

  Engine.update(engine);
  
  ground.display();
  ground2.display();
  box.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display();
  box8.display();
  box9.display(); 
  box10.display(); 
  slingshot.display();
  box.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  
  console.log("mouseX" + "mouseY", mouseX, mouseY)
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function keyPressed(){
if(keyCode === 32){
  slingshot.attach(this.polygon);
}

}