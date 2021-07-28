var seaImg, shipImg, shipImg_sprite, seaImg_sprite;

function preload(){

  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png"); 
  
}

function setup(){
  createCanvas(1000,1000);
 
 seaImg_sprite = createSprite(0,500);
 seaImg_sprite.addImage(seaImg);
 seaImg_sprite.scale = 0.5
 seaImg_sprite.velocityX = -20
 shipImg_sprite = createSprite(150,700,20,30);
 shipImg_sprite.addAnimation("running", shipImg);
 shipImg_sprite.scale = 0.3
}

function draw() {
  background("white");
  //code to reset the background
if(seaImg_sprite.x < 0){
  seaImg_sprite.x = seaImg_sprite.width/5;
}
 drawSprites();
}
