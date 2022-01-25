var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")


ship=loadImage("Ship-1.png","Ship-2.ping")

 shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png")
  
}




function setup(){
  createCanvas(500,500);
  background("500");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
 sea.velocityY=-3
 sea.velocityX=-3
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  

ship = createSprite(10,100,20,20)
ship.addImage("ship-1.png","ship-2.png")
ship.scale=0.5



}

function draw() {
  background(blue);   
drawSpirte()
}
