var seaImg;
var shipImg;
var ship;
var mySprite;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,300);
  background("blue");

  mySprite = createSprite(300,150,1000,1000);
  mySprite.addImage(seaImg);
  mySprite.scale = 0.2;

  ship = createSprite(200, 200, 50, 50);
  ship.addAnimation("shipImg" , shipImg);
  ship.scale = 0.1;
 
}

function draw() {

  mySprite.x = mySprite.x - 6;

  if (mySprite.x < 0){
    mySprite.x = 300;
  }
 
  drawSprites();
}