var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	world = engine.world;
	roof1 = new roof(400,150,400,20);

 bob1 = new bob(200,400,20);
 bob2 = new bob(230,400,20);
 bob3 = new bob(260,400,20);
 bob4 = new bob(290,400,20);
 bob5 = new bob(320,400,20);
 
 rope1 = new rope(bob1.body,roof1.body,-bob.radius * 4,0);
 rope2 = new rope(bob2.body,roof1.body,-bob.radius * 4,0);
 rope3 = new rope(bob3.body,roof1.body,-bob.radius * 4,0);
 rope4 = new rope(bob4.body,roof1.body,-bob.radius* 4,0);
 rope5 = new rope(bob5.body,roof1.body,-bob.radius * 4,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



