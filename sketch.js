var trex ,trex_running;

function preload(){
  trex_running=loadAnimation("trex1.png","trex2.png","trex3.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(20,170,50,50);
 trex.addAnimation("abc",trex_running);
 trex.scale=0.5;

}

function draw(){
  background("blue");
 
  if(keyDown("space")){
  trex.velocityY = -5
  }
  trex.velocityY = trex.velocityY+0.8

  edges = createEdgeSprites();

  trex.collide(edges[3]);


  drawSprites();
}
