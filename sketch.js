var king,kingImg,soldierImg,soldier;//scene 1

var backgroundImg;

var gameState=0;

var nextButton;

var scene=1;

var queenImg,queen;

var commanderImg,commander,babyImg,baby;

function preload (){

backgroundImg=loadImage("images/war background 2.jpg");

backgroundImg1=loadImage("images/palace hall.jpg");


kingImg=loadImage("images/King1.jpg")

soldierImg=loadImage("images/Soldier 2.png")

nextImg=loadImage("images/nextButton.png")

queenImg=loadImage("images/Queen.jpg")

commanderImg=loadImage("images/Commander.jpg")

babyImg=loadImage("images/baby crying.png")
}




function setup (){

canvas=createCanvas(1400,800);


//scene2=createSprite(700,400,1400,800)

scene2=createSprite(700,400,1400,800)
scene2.addImage(backgroundImg1);
scene2.scale=2;

scene1=createSprite(700,400,1400,800);
scene1.addImage(backgroundImg)
scene1.scale=1




king=createSprite(690,610,10,10);
king.addImage(kingImg);
king.scale=0.3

queen=createSprite(-500,610,10,10);
queen.addImage(queenImg);
queen.scale=0.4

commander=createSprite(-500,610,10,10);
commander.addImage(commanderImg);
commander.scale=0.3


baby=createSprite(-500,610,10,10);
baby.addImage(babyImg);
baby.scale=0.1


nextButton=createSprite(690,730,10,10)
nextButton.addImage(nextImg);
nextButton.scale=0.5

//soldier1=new Soldier(780,610,40,40);
soldier1=createSprite(790,610,40,40);
soldier1.addImage(soldierImg)
soldier1.scale=0.36

soldier2=createSprite(890,610,40,40);
soldier2.addImage(soldierImg)
soldier2.scale=0.36

soldier3=createSprite(990,610,40,40);
soldier3.addImage(soldierImg)
soldier3.scale=0.36

soldier4=createSprite(1090,610,40,40);
soldier4.addImage(soldierImg)
soldier4.scale=0.36

soldier5=createSprite(590,610,40,40);
soldier5.addImage(soldierImg)
soldier5.scale=0.36

soldier6=createSprite(490,610,40,40);
soldier6.addImage(soldierImg)
soldier6.scale=0.36

soldier7=createSprite(390,610,40,40);
soldier7.addImage(soldierImg)
soldier7.scale=0.36

soldier8=createSprite(290,610,40,40);
soldier8.addImage(soldierImg)
soldier8.scale=0.36
}

function draw(){


  background(255)


//soldier1.display();
//imageMode(CENTER);

//image(soldierImg,770,610,100,100);




if(scene===1&&mousePressedOver(nextButton)){

  scene=2;
  scene1.x=-5050;

king.x=750;

queen.x=560;

commander.x=400;

baby.x=555;
baby.y=615;


  soldier1.x=-5000;
  soldier2.x=-5000;
  soldier3.x=-5000;
  soldier4.x=-5000;
  soldier5.x=-5000;
  soldier6.x=-5000;
  soldier7.x=-5000;
  soldier8.x=-5000;

  

}




if(scene===2&&mousePressedOver(nextButton)){

  scene=3;
  //scene2.visible=false;

/*king.x=750;

queen.x=560;

commander.x=400;

baby.x=555;
baby.y=615;


  soldier1.x=-5000;
  soldier2.x=-5000;
  soldier3.x=-5000;
  soldier4.x=-5000;
  soldier5.x=-5000;
  soldier6.x=-5000;
  soldier7.x=-5000;
  soldier8.x=-5000;
*/

}




drawSprites();

text(mouseX+","+mouseY,mouseX,mouseY);



if(scene===1){

  // scene1.addImage(backgroundImg)
 
  stroke("red")
  strokeWeight(2)
  fill("purple")
  textSize(30)
  text("War was at its peak......",500,80)
 
 
 }

 
 
if(scene===2){

  // scene1.addImage(backgroundImg)
 

  
  stroke("red")
  strokeWeight(2)
  fill("purple")
  textSize(20)
  text("10 Hours Earlier.....,",500,80);

 // text("King:My Queen You Must Flee with the prince before we lose this battle.....",500,100);

//text("Queen:Let me take commander and soldiers with me",500,120);

 
 
 }

}



