var y = 600;
var speed = 3;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  
background(228, 155, 155); //backround


   
fill(230, 207, 232);
noStroke();
 
push();
translate(74, y);
rotate(30);
ellipse(0, 0, 50, 80);
pop(); 

push();
translate(42, y);
rotate(310);
ellipse(0, 0, 50, 80);
pop(); //big heart 1


push();
translate(564, y);
rotate(30);
ellipse(0, 0, 57, 96);
pop(); 

push();
translate(532, y);
rotate(310);
ellipse(0, 0, 70, 95);
pop(); //big heart 2


if (y <= 0) {
    speed = - 3;
}

if (y == height) {
    speed = 3;
}

 y = y - speed;


noStroke();
fill(43, 38, 27);

push();
translate(190, 170);
rotate(38);
ellipse(0, 0, 110, 290);
pop(); //hair5

push();
translate(150, 270);
ellipse(0, 0, 140, 190);
pop(); //hair6


noStroke();
fill(236, 200, 178);
rect(240, 400, 160, 200); //neck


noStroke();
fill(104, 74, 130);

push();
translate(230, 490);
rotate(320);
ellipse(0, 0, 70, 100);
pop(); //cloth1

push();
translate(263, 487);
ellipse(0, 0, 60, 100);
pop(); //cloth2

push();
translate(310, 488);
rotate(10);
ellipse(0, 0, 50, 100);
pop(); //cloth3

push();
translate(360, 488);
rotate(10);
ellipse(0, 0, 57, 100);
pop(); //cloth4

push();
translate(400, 488);
rotate(31);
ellipse(0, 0, 57, 100);
pop(); //cloth5


push();
noStroke();
fill(186, 158, 167);
ellipse(300, 610, 350, 290);
pop(); //cloth6


fill(43, 38, 27);
ellipse(110, 390, 70, 80); 
ellipse(140, 390, 70, 80); //left plaits


noStroke();
fill(240, 231, 212);
ellipse(170, 315, 80, 180);
fill(218, 193, 140);
ellipse(173, 310, 40, 100); 
fill(240, 231, 212); //headphone on the left


noStroke();
fill(236, 200, 178);
ellipse(330, 270, 300, 340);
ellipse(290, 330, 300, 195); //face


noStroke();
fill(218, 185, 205);

push();
translate(180, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color1

push();
translate(205, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color2

push();
translate(230, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color3

push();
translate(340, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color4

push();
translate(365, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color5

push();
translate(390, 343);
rotate(34);
ellipse(0, 0, 15, 25);
pop(); //check color6


fill(238, 187, 155); 
triangle(289, 300, 273, 320, 289, 332); //nose


noStroke();
fill(43, 38, 27);
ellipse(500, 285, 100, 170); //hair9


ellipse(510, 390, 70, 80); 
ellipse(480, 390, 70, 80); 

push();
translate(490, 480);
rotate(31);
ellipse(0, 0, 90, 130);
pop(); 

push();
translate(470, 470);
rotate(60);
ellipse(0, 0, 80, 130);
pop();

push();
translate(380, 510);
rotate(60);
ellipse(0, 0, 90, 130);
pop();

push();
translate(400, 530);
rotate(90);
ellipse(0, 0, 90, 130);
pop(); 

push();
translate(320, 520);
rotate(90);
ellipse(0, 0, 85, 100);
pop();

ellipse(265, 525, 90, 70);

push();
translate(200, 500);
rotate(300);
ellipse(0, 0, 35, 100);
pop();

push();
translate(200, 520);
rotate(270);
ellipse(0, 0, 35, 100);
pop();

push();
translate(200, 540);
rotate(230);
ellipse(0, 0, 35, 100);
pop(); //right plaits

push();
translate(89, 475);
rotate(31);
ellipse(0, 0, 90, 130);
pop(); 

push();
translate(50, 460);
rotate(60);
ellipse(0, 0, 80, 123);
pop(); 

ellipse(0, 500, 20, 20);

push();
translate(10, 530);
ellipse(0, 0, 100, 60);
pop(); //left plaits


push();
translate(485, 250);
rotate(340);
ellipse(0, 0, 120, 218);
pop(); //hair8

push();
translate(400, 145);
rotate(305);
ellipse(0, 0, 120, 290);
pop(); //hair7

push();
translate(390, 150);
rotate(310);
ellipse(0, 0, 110, 270);
pop(); //hair1

push();
translate(220, 145);
rotate(30);
ellipse(0, 0, 90, 210);
pop(); //hair2

push();
translate(280, 125);
rotate(5);
ellipse(0, 0, 15, 60);
pop(); //hair10

push();
translate(290, 125);
rotate(165);
ellipse(0, 0, 18, 69);
pop(); //hair11

push();
translate(300, 69);
ellipse(0, 0, 120, 50);
pop(); //haiir3

push();
translate(215, 160);
rotate(316);
ellipse(0, 0, 152, 52);
pop(); //haiir4


noStroke();
fill(240, 231, 212);
ellipse(480, 305, 80, 180);
fill(218, 193, 140);
ellipse(482, 305, 50, 100); 
fill(240, 231, 212); 
ellipse(484, 313, 25, 25); //headphone on the right


noFill();
stroke(60, 53, 39);
strokeWeight(6);
arc(235, 265, 57, 66, 205, 335, OPEN);
arc(380, 265, 57, 66, 205, 335, OPEN);
 //eyelash

fill(60, 53, 39);
noStroke();
ellipse(238, 268, 50, 70); //left eye
ellipse(384, 268, 50, 70); //right eye

fill(230, 207, 232);
noStroke();
push();
translate(243, 280);
rotate(30);
ellipse(0, 0, 18, 29);
pop(); 

push();
translate(232, 281);
rotate(310);
ellipse(0, 0, 18, 29);
pop(); //left heart

push();
translate(390, 280);
rotate(30);
ellipse(0, 0, 18, 29);
pop(); 

push();
translate(379, 281);
rotate(310);
ellipse(0, 0, 18, 29);
pop(); //right heart

ellipse(231, 248, 10, 10);
ellipse(225, 258, 7, 7);
ellipse(250, 290, 7, 7); //left eye

ellipse(378, 248, 10, 10);
ellipse(372, 258, 7, 7); 
ellipse(398, 290, 7, 7); //right eye
//eye


fill(230, 169, 159);
noStroke();
arc(290, 367, 35, 60, 0, 180, OPEN); //mouth


stroke(240, 231, 212);
strokeWeight(20);
noFill();
arc(319, 219, 320, 250, 170, 360, open); //headphone connection



}
