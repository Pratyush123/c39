var player;
var paddle;
var background;
function setup(){
    var canvas = createCanvas(400,400);

player = createSprite(200,200,20,20);
player.scale = 0.2;
player.addImage("boy",player_img);
player.shapeColor = "red";
}

background = createSprite(200, 180, 400, 20);
background.addImage("background",background_img)

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

function preload(){
    player_img = loadImage("../images/boy.png");
    background_img = loadImage("../images/background.jpg");
    paddle_img = loadImage("../images/paddle.png");
    player_jumping = loadImage("../images/jumping.png");
}

function draw(){

   if(keyDown("space")){
       player.velocityY = -11;
       player.addImage("jumping",player_jumping);
       }

   player.velocityY= player.velocityY + 0.6;

  if(mountain.y>400){
mountain.y = mountain.width/2;
  }
spawnPaddles();
    drawSprites();
};
function spawnPaddles(){
    if(World .frameCount%39===0){
        var paddle = createSprite(200,0,40,10);
        paddle.velocityY = 4;
        paddle.scale = 0.6;
        paddle.lifetime = 100;
        paddle.visible = true;
        paddle.addImage("paddle",paddle_img);
        paddle.depth = player.depth;
        player.depth = player.depth + 1;
        
        createEdgeSprites();
    }
}