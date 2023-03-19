var bella
var bellaImg , bellaRun
var scene , sceneImg
var score
var obstacle1Img
var obstacle2Img
var invisibleGround
var obstaclesGroup
var gameOver , gameOverImg 


function preload(){
bellaImg = loadImage("Dog 3.png")
sceneImg = loadImage("scene garden.png")
bellaRun = loadAnimation("Dog 3.png" , "Dog 2.png" , "Dog 1.png");
obstacle1Img = loadImage("angry cat.png")
obstacle2Img = loadImage("angry dog.png")

gameOverImg = loadImage("game over.png")

}

function setup() {
createCanvas(windowWidth-100,windowHeight-100)

scene = createSprite(width/2,height-200)
scene.addImage(sceneImg)
scene.scale = 1.3
scene.velocityX=-3

bella = createSprite(width/11,height-80,20,20)
bella.addAnimation("running" , bellaRun)
bella.scale = 0.9


score=0
obstaclesGroup = new Group()

invisibleGround = createSprite(200,270,2200,10);
               invisibleGround.visible = false
       

 bella.debug = false
  }

function draw() {

    score = score+5

    if (scene.x < 350){
        scene.x = 1200;
    }


drawSprites();


if(keyDown("space")&& bella.y >= 100) {
        bella.velocityY = -17.5;
    }

    bella.velocityY = bella.velocityY + 0.8

text("Score: "+ score, width/11,height/14);
spawnObstacles()

bella.collide(invisibleGround);

if(obstaclesGroup.isTouching(bella)){
        scene.velocityX = 0
        obstacle.velocityX = 0
     
        gameOver.addImage(gameOverImg)
        gameOver = createSprite(width/2,height/2)
        gameOver.scale = 0.5
        
} 
}

function spawnObstacles(){
        if (frameCount % 110 === 0){
                var obstacle = createSprite(width,height-100,10,40);
                obstacle.velocityX = -8;
       
var rand = Math.round(random(1,2));
switch(rand) {
  case 1: obstacle.addImage(obstacle1Img);
  
          break;
  case 2: obstacle.addImage(obstacle2Img);
 
          break;

  
        
  
  default: break; 
}

obstacle.scale = 0.20;
     obstacle.lifetime = 300;

     obstaclesGroup.add(obstacle)
}
}








