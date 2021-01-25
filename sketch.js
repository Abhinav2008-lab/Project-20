var GroundImage;
var cat, catImage, catImg2, catImg3;
var jerry, jerryImage, mouseImg2, mouseImg3;

function preload() {
    
GroundImage = loadImage("images/garden.png");

catImage = loadImage("images/tomOne.png");
jerryImage = loadImage("images/jerryOne.png");

catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");

catImg3 = loadImage("images/tomFour.png");
mouseImg3 = loadImage("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);

    background = createSprite(500,400);
    background.addImage(GroundImage);
    background.scale = 1.25;

    cat = createSprite(750,600);
    cat.addImage(catImage);
    cat.scale = 0.1;

    jerry = createSprite(250,600);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;


}

function draw() {

  if((cat.x - jerry.x<100) &&
    (jerry.x - cat.x < 100)){
    cat.velocityX = 0;
    cat.addAnimation("catImg",catImg3);
    cat.changeAnimation("catImg");
    jerry.addAnimation("mouseImg", mouseImg3);
    jerry.changeAnimation("mouseimg");
  }
  
    drawSprites();
 }

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",catImg2)
    cat.changeAnimation("catrunning");
    jerry.addAnimation("teasing",mouseImg2)
    jerry.changeAnimation("teasing");
  }

}
