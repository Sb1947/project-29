const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var slingshot;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)

  slingshot = new SlingShot(this.polygon,{x:100,y:200})

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  





  drawSprites();
}