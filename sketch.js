const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint


var engine,world;
var bg;
var snow = []

function preload(){
bg=loadImage("snow3.jpg")
//snow=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world =  engine.world;
  //var bg=createSprite(400, 200, 50, 50); 
  
}

function draw() {
  background(bg);  
  Engine.update(engine)
   //display the snow
if(frameCount%90===0){
  snow.push(new Snow(random(400,300),10,10));
}
for(var j=0;j<snow.length;j++){
snow[j].display();
 }
//drawSprites();
}