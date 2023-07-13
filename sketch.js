  var ninja, ninja_stopped, ninja_running, ninja_collided, ninjaImg;
  var jumpSound
  var collidedSound


function preload(){
    jumpSound = loadSound ("01.wav")
    collidedSound = loadSound ("collided.wav")
  
    ninja_running = loadAnimeation("ninja_Running_1.png", "ninja_Running_2.png");
    ninja_collided = loadAnimeation("ninja_Stopped.png");

}

function setup() {
  createCanvas(600, 400);
  
  ninja = createSprite(50,height-70,20,50);
  ninja.addAnimation("running",  ninja_Running);
  //ninja.addAnimation("collided", ninja_collided);
  ninja.setCollider('circle',0,0,40)
  ninja.scale = 0.8


}

function draw() {
   
  
  
  drawSprites();
}