var player;
var mountain;
function setup(){
    var canvas = createCanvas(400,400);
   

mountain = createSprite(200,200,800,800);
mountain.shapeColor = "blue";
mountain.velocityY = 4;
mountain.x = mountain.width/2;

player = createSprite(200,200,20,20);
player.shapeColor = "red";
}

function preload(){
}

function draw(){
    background(0);
   
   if(keyDown("space")){
       player.velocityY = -10;
   }

   player.velocityY= player.velocityY + 0.8;

  if(mountain.y>400){
mountain.y = mountain.width/2;
  }
spawnPaddles();
    drawSprites();
};
function spawnPaddles(){
    if(World .frameCount%40===0){
        var paddle = createSprite(200,0,40,10);
        paddle.velocityY = 4;

    }
}