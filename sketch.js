var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,650,50);
	World.add(world, roof);

	bobObject1 = new Bob(200,600,50);
	bobObject2 = new Bob(300,600,50);
	bobObject3 = new Bob(400,600,50);
	bobObject4 = new Bob(500,600,50);
	bobObject5 = new Bob(600,600,50);
	bobDiameter = bobObject3.body.radius

	rope1 = new Rope(bobObject1.body,{x:200, y:100});
	rope2 = new Rope(bobObject2.body,{x:300, y:100});
	rope3 = new Rope(bobObject3.body,{x:400, y:100});
	rope4 = new Rope(bobObject4.body,{x:500, y:100});
	rope5 = new Rope(bobObject5.body,{x:600, y:100});
													
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(230,230,230));

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 // rope2.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-200});
	}
}

