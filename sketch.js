
var monkey , monkey_running,monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup
var survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  createCanvas(600,600);
    SurvivalTime = 0;
   monkey =createSprite(80,315,20,20)
  
  
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
   
   ground =createSprite(400,350,900,10)
  ground.velocityX=-4
   ground.x = ground.width/2;
 
  bananaGroup = new Group();
  obstaclesGroup= new Group();
  
  score=0;
  
  
  

  
}


function draw() {


  background("lightgreen")
  
  
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  
   if(keyDown("space") ){
monkey.velocityY=-12
    

  }
  monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground) ;
  
  
  spawnBanana();
  spawnObstacles();
    drawSprites();
  
   stroke("white")
 textSize=20
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ SurvivalTime, 500,50)
 
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  
  
  
  
  
  
  
  
  
}
  function spawnBanana(){
  if (frameCount % 80 === 0){
   banana = createSprite(600,250,40,10);
    banana.y = random(120,40);
    banana.velocityX = -2;
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime = 300;
    monkey.depth=banana.depth+1;
    bananaGroup.add(banana)
     }
  }
   function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle =createSprite(800,320,10,60);
    
    obstacle.velocityX=-6
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.lifetime=500;
    obstaclesGroup.add(obstacle);
  }
 
   }
 
  
  
  
  
 