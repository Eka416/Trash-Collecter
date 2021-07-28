
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,bottom,right, left;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);

	var ball_opt = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world; 

	right = new Ground(350,700,700,10)
	left = new Ground(450,660,10,80)
	bottom = new Ground(600,660,10,80)
	
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(350,0,25,ball_opt)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200);
	ellipse(ball.position.x,ball.position.y,25,25)
	drawSprites();
	bottom.display()
	left.display()	
	right.display()
	if (keyDown(UP_ARROW)) {
		Force()
		console.log("hi")
	}
}
function Force() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:5})
  }


