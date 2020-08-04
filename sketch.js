
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var base;
var side1;
var side2;

function preload()
{
	paperImg= loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	ball1= new Paper(200,100,20,20);
	
	ground = new Ground(400,650,800,20)
	
	base=createSprite(600,640,200,20);
	base.shapeColor=color(255);

	side1=createSprite(490,600,20,100);
	side1.shapeColor=color(255);

	side2=createSprite(710,600,20,100);
	side2.shapeColor=color(255);

	baseShadow = Bodies.rectangle(600,640,200,20,{isStatic:true} );
	World.add(world, baseShadow);
 
	shadow1= Bodies.rectangle(490,600,20,100,{isStatic:true} );
	World.add(world, shadow1);

	shadow2 = Bodies.rectangle(710,600,20,100,{isStatic:true} );
	World.add(world, shadow2);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
 ground.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-60});

}

}


