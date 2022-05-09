var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";


function preload(){
  img = loadImage('https://ziyinrl.github.io/game/udon.jpg');
  img2 = loadImage('https://ziyinrl.github.io/game/meatballnoodle.jpg');
  img3 = loadImage('https://ziyinrl.github.io/game/straberry.png');
  img4 = loadImage('https://ziyinrl.github.io/game/fishcake.png');
  img5 = loadImage('https://ziyinrl.github.io/game/cake.jpg');
  img6 = loadImage('https://ziyinrl.github.io/game/meatballnoodle.jpg');
  img7 = loadImage('https://ziyinrl.github.io/game/meatball.png');
  img8 = loadImage('https://ziyinrl.github.io/game/ending.jpg');
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
   image(img4, ballx, bally, ballSize, ballSize);
}

function levelTwo(){
  background(img5);
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
     
   image(img3, ballx, bally, ballSize, ballSize);
}

function levelThree(){
   background(img6);
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
   image(img7, ballx, bally, ballSize, ballSize);
}

function levelFour(){
   background(img8);
   
   
   
}
