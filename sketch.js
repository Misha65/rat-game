var player;
var obstacle1;
var maze; 

var lives=2;
var points=0;
function preload(){

    mapImage=loadImage("game map.jpg");
    coinimg=loadImage("coin-removebg-preview.png")
    poisonimg=loadImage("poison.png")
    cheeseimg=loadImage("cheese.png")
    playerimg=loadImage("player.png")
}
function setup(){
createCanvas(1550,650);

player=createSprite(120,500,50,50);
player.shapeColor="yellow"
player.addImage(playerimg)
player.scale=0.2



maze=createSprite(161,238,30,200);                           

maze1=createSprite(735,200,300,30);

maze2=createSprite(700,300,80,30);

maze3=createSprite(345,225,30,300);                  

maze4=createSprite(650,300,800,30);

maze5=createSprite(450,267,30,300);

maze6=createSprite(680,420,400,30);             

maze7=createSprite(750,680,30,350);

maze8=createSprite(40,200,30,550);

maze9=createSprite(70,600,530,30);

maze10=createSprite(1000,550,30,250);

maze11=createSprite(1175,410,30,550);

maze13=createSprite(880,190,30,200);

maze12=createSprite(370,70,550,30);

maze.shapeColor="brown"
maze1.shapeColor="brown"
maze2.shapeColor="brown"
maze3.shapeColor="brown"
maze4.shapeColor="brown"
maze5.shapeColor="brown"
maze6.shapeColor="brown"
maze7.shapeColor="brown"
maze8.shapeColor="brown"
maze9.shapeColor="brown"
maze10.shapeColor="brown"
maze11.shapeColor="brown"
maze12.shapeColor="brown"
maze13.shapeColor="brown"
obstacle1=createSprite(660,580,30,30);
obstacle1.shapeColor="red"
obstacle1.addImage(poisonimg)
obstacle1.scale=0.30
obstacle2=createSprite(270,425,30,30);
obstacle2.addImage(poisonimg)
obstacle2.scale=0.30
obstacle2.shapeColor="red"
obstacle3=createSprite(930,535,30,30);
obstacle3.shapeColor="red"
obstacle3.velocityX=3;
obstacle3.addImage(poisonimg)
obstacle3.scale=0.30
obstacle4=createSprite(855,360,30,30);
obstacle4.shapeColor="red"
obstacle4.addImage(poisonimg)
obstacle4.scale=0.30
obstacle5=createSprite(1045,215,30,30);
obstacle5.shapeColor="red"
obstacle5.addImage(poisonimg)
obstacle5.scale=0.30
obstacle6=createSprite(1400,85,30,30);
obstacle6.shapeColor="red"
obstacle6.addImage(poisonimg)
obstacle6.scale=0.30
obstacle7=createSprite(1085,420,30,30);
obstacle7.shapeColor="red"
obstacle7.addImage(poisonimg)
obstacle7.scale=0.30
obstacle8=createSprite(275,114,30,30);
obstacle8.shapeColor="red"
obstacle8.addImage(poisonimg)
obstacle8.scale=0.30

//Coins
coin1=createSprite(100,150,20,20)
coin1.addImage(cheeseimg)
coin1.scale=0.15

coin2=createSprite(290,230,20,20)
coin2.addImage(coinimg)
coin2.scale=0.15

coin3=createSprite(530,120,20,20)
coin3.addImage(coinimg)
coin3.scale=0.2

coin4=createSprite(420,570,20,20)
coin4.addImage(coinimg)
coin4.scale=0.2

coin5=createSprite(950,170,20,20)
coin5.addImage(coinimg)
coin5.scale=0.15

coin6=createSprite(1250,300,20,20)
coin6.addImage(coinimg)
coin6.scale=0.2
}
function draw(){

    background(mapImage);

    if(keyDown(UP_ARROW)){

        player.y=player.y-10;

    }
     if(keyDown(RIGHT_ARROW)){

        player.x=player.x+10;

    }
    if(keyDown(LEFT_ARROW)){

        player.x=player.x-10;

    }

    if(keyDown(DOWN_ARROW)){

        player.y=player.y+10;

    }

obstacle3.bounceOff(maze7)
obstacle3.bounceOff(maze10)
if(player.isTouching(obstacle1) || player.isTouching(obstacle2) || player.isTouching(obstacle3) ||
player.isTouching(obstacle4) || player.isTouching(obstacle5) || player.isTouching(obstacle6) ||
player.isTouching(obstacle7) || player.isTouching(obstacle8) ){

    lives=lives-1
    player.x=120
    player.y=500
   
}
player.collide(maze)
player.collide(maze1)
player.collide(maze2)
player.collide(maze3)
player.collide(maze4)
player.collide(maze5)
player.collide(maze6)
player.collide(maze7)
player.collide(maze8)
player.collide(maze9)
player.collide(maze10)
player.collide(maze11)
player.collide(maze12)
player.collide(maze13)

if(lives<0)
{
    strokeWeight(6)
    fill("black")
    textSize(70)
    text("GAME OVER", 700,400)
    player.x=120
    player.y=500

}

if(player.isTouching(coin1)){
points=points+10
coin1.destroy()
}

if(player.isTouching(coin2)){
    points=points+10
    coin2.destroy()
}

    
if(player.isTouching(coin3)){
    points=points+20
    coin3.destroy()
}
    
if(player.isTouching(coin4)){
    points=points+20
    coin4.destroy()
}
    
if(player.isTouching(coin5)){
    points=points+10
    coin5.destroy()
}

    
if(player.isTouching(coin6)){
    points=points+20
    coin6.destroy()
}

drawSprites();


textSize(30)
text("Lives : " + lives,1200,60)


textSize(30)
text("Score : " + points,900,60)

}

