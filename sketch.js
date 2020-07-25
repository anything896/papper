
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
papper1= new Papper (50,200,15,15)
bin1=new Bin (100,20,100,20)
bin2=new Bin (100,50,20,100)
bin3=new Bin (100,50,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  pappre1.display();
  drawSprites();
 
}
function KeyPressed(){
if (KeyPressed(uparrow))
Matter.body.applyforce(pappew1.body.position{85,85})
}
