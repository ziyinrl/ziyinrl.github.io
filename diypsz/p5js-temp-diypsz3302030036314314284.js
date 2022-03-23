var img;
var initials ='zz';
var choice = '1';
var screenbg = '172, 83, 73';
var lastscreenshot=61;

function preload() {
  
 img = loadImage('https://ziyinrl.github.io/pinkheart.png') ;
}


function setup() {
createCanvas(windowWidth, windowHeight);
background(172, 83, 73);
angleMode(DEGREES);
}


function draw() {
  if (keyIsPressed) {
     choice = key;
     clear_print(); 
  }
  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}


function newkeyChoice(toolChoice) {
  
  if (toolChoice == '1') { //pink heart
    
    image(img, mouseX-220, mouseY-160);
  
  }
  else if (toolChoice == '2') { //white vertical line from the top

    strokeWeight(1);
    stroke(240, 242, 247);
    line(mouseX, mouseY, pmouseX, 80);
}
 else if (toolChoice == '3') { //light blue vertical line from the bottom

    strokeWeight(1);
    stroke(139, 157, 227);
    line(mouseX, mouseY, pmouseX, windowHeight-80);
}

  else if (toolChoice == '4'){ //white empty rectangle
    
    stroke(240, 242, 247);
    noFill();
    strokeWeight(4);
    rect(mouseX, mouseY, 50, 50);
  }
  else if (toolChoice =='5'){ //blue rectangle
    noStroke();
    fill(49, 72, 162);
    rect(mouseX, mouseY, 49, 49);
  }
  else if (toolChoice == '6'){ //blue empty rectangle
    
    stroke(49, 72, 162);
    noFill();
    strokeWeight(4);
    rect(mouseX, mouseY, 50, 50);
}

 else if (toolChoice == '7'){  // white rectangle
    noStroke();
    fill(240, 242, 247);
    rect(mouseX, mouseY, 49, 49);
  }

  else if (toolChoice == '8'){ //white triangle
  noStroke();
  fill(240, 242, 247);
  arc(mouseX, mouseY, 40, 35, 180, 250);
  }
  
 else if (toolChoice == '9'){ //blue triangle
  stroke(49, 72, 162);
  strokeWeight(3);
  noFill();
  arc(mouseX, mouseY, 40, 35, 30, 100, PIE);
  } 
  
  else if (toolChoice == '0'){ //red ellipse
    stroke(139,  157, 227);
    fill(171, 72, 61);
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  
}


function clear_print() {
  
   if (key == 'x' || key == 'X') {
  background(172, 83, 72);

} else if (key == 'p' || key == 'P') {
   saveme();
}   
  
}

function saveme(){
  
 filename=initials+day() + hour() + minute() +second();
 
 if (second()!=lastscreenshot) {
   
   saveCanvas(filename, 'jpg');
    }
    lastscreenshot=second();

}
