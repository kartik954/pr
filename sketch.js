
const MEngine = Matter.Engine;
const MWorld = Matter.World;
const MBodies = Matter.Bodies;
const MBody = Matter.Body;

var ground;
var dustbinW1, dustbinW2, dustbinW3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = MEngine.create();
	world = engine.world;

	ground = new Ground(400, 390, 800, 10);

	dustbinW1 = new Dustbin(670, 345, 10, 80);
  dustbinW2 = new Dustbin(600, 380, 150, 10);
  dustbinW3 = new Dustbin(530, 345, 10, 80);

  ball = new Paper(100, 380);


	MEngine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  ground.display();
  dustbinW1.display();
  dustbinW2.display();
  dustbinW3.display();
  ball.display();
}

function keyPressed(){
  console.log(" jump ball")
  if(keyCode ==  UP_ARROW){
    console.log("in up arrow")
    //Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -85});
  }
}



