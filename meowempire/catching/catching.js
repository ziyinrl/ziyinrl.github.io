var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";


function preload(){
  img = loadImage('https://ziyinrl.github.io/meowempire/meowempire.gif');
  img2 = loadImage('https://ziyinrl.github.io/meowempire/7.png');
  img3 = loadImage('https://ziyinrl.github.io/meowempire/7(1.png');
  
}



function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);

}


function draw() {
 background(img);
 
 if (gameState == "L1"){
   levelOne();
 }
 
 if (gameState == "L2"){
   levelTwo();
 }
 
  if (gameState == "L3"){
   levelThree();
 }
 
 if (gameState == "L4"){
   levelFour();
 }
 
 
 
 text(("score: " + score), width/2, 40);

}

function levelOne(){
   text("Level 1", width/2, height-20);
   
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   
   if (distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1; 
   }
   
   if(score >= 10){
     gameState = "L2";
   }
   
   line(ballx + 19, bally + 19, mouseX, mouseY);  
   image(img2, ballx, bally, ballSize, ballSize);
}

function levelTwo(){
  background(img);
   text("Level 2", width/2, height-20);
   
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   
   if (distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1; 
   }
    
   if(score>=20){
     gameState = "L3";
   }
     
   image(img2, ballx, bally, ballSize, ballSize);
}

function levelThree(){
   background(img);
   text("Level 3", width/2, height-20);
   
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   
   if (distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1;
   ballSize = ballSize - 1;
   }
   
   if(score >= 30){
     gameState = "L4";
   }   
   image(img2, ballx, bally, ballSize, ballSize);
}

function levelFour(){
   background(img3);
   
   
   
}
