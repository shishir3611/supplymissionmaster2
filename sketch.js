var helicopterIMG, helicopterSprite;
var ground, redBox
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	redBoxSprite=createSprite(width/2, height-50, 200,20);
	redBoxSprite.shapeColor=color(255,0,0);
	


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	package1 = new Package()
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	package1.display();
	keyPressed();
	fill(255,0,0);
	rect(310,height-95,20,100);
	rect(490,height-95,20,100);
	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
  }
}



