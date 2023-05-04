var bgImg, frogImg, frog

function preload() {
   bgImg = loadImage("assets/bg sky.jpeg")
   frogImg = loadAnimation("assets/frog1.png","assets/frog3.png")
obstacleImg= loadImage("assets/flower.png")

}
function setup() {
  createCanvas(1200, 800);
  frog = createSprite(100,700,20,50)
  frog.addAnimation("jumping",frogImg)
  obstacleGroup = new Group ()
  ground = createSprite(100,700, 2000,1)

}
function draw() {
  background(220);
  image(bgImg,0, 0, 1200, 800)
  if (keyDown("space")){
    frog.velocityY=-10
  }
  frog.velocityY = frog.velocityY + .8
  if (ground.x<0){
    ground.x = ground.width/2
  }
  frog.collide(ground)
  spawnObstacles()
  drawSprites()
  
}

function spawnObstacles(){
  if (frameCount % 80 === 0 ){
    obstacle = createSprite(600, 600, 20, 20)
    obstacle.addImage(obstacleImg)
    obstacle.y = Math.round(random(400,700))
    obstacle.velocityX=-3
    obstacle.scale = 0.1
    obstacleGroup.add(obstacle)
  }
}