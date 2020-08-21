
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,bob6,bob7;
var rope1,rope2,rope3,rope4,rope5,rope6,rope7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,50);

	bob1 = new Bob(245,500,10);
	bob2 = new Bob(295,500,10);
	bob3 = new Bob(345,500,10);
	bob4 = new Bob(395,500,10);
	bob5 = new Bob(445,500,10);
	bob6 = new Bob(495,500,10);
	bob7 = new Bob(545,500,10);

	rope1 = new Rope(bob1.body,roof.body,-150,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,-50,0);
	rope4 = new Rope(bob4.body,roof.body,0,0);
	rope5 = new Rope(bob5.body,roof.body,50,0);
	rope6 = new Rope(bob6.body,roof.body,100,0);
	rope7 = new Rope(bob7.body,roof.body,150,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:10});
  }
  }
  


