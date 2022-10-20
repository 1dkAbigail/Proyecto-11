var ship, ship_navegando;
var sea, seaImage;

function preload() {
  ship_navegando = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");

  seaImage = loadImage("sea.png");
}

function setup() {
createCanvas(600, 200);

//crear sprite de ship
ship = createSprite(50,170,20,50);
ship.addAnimation("running", trex_running);
ship.scale = 0.5;

  
//crear sprite de sea
sea = createSprite(200,150,400,20);
sea.addImage("sea",seaImage);
}

function draw() {
background(220);
drawSprites();
}