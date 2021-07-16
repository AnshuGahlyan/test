var taskbari;
var taskbar;
var t2,t2i,t3,t3i,t4,t4i;
var ba,bai
var a1,a1i,a2i;
var b1,b2,b3;
var tor,tori;
var l = 0;
var p = 0;
var o = 0;
var da,dai;
var q
var q1,q2,q3,q4;
var w;
var c1,c2,c3,c4,c5,c6;

function preload(){
 taskbari = loadImage("taskbar.png");
  t2i = loadImage("t2.png");
  t3i = loadImage("t3.png");
  t4i = loadImage("t4.png");
  bai = loadImage("1.jpg");
  a1i = loadImage("dis.png");
  tori = loadImage("op.png");
  dai = loadImage("da.png");
  a2i = loadImage("a2.png");
  q1 = loadImage("tor2.png");
  q2 = loadImage("tor1.png");
  q3 = loadImage("tor3.png");
  w = loadImage("oa.png");

}
function setup() {
  createCanvas(1340,640);
  
  ba = createSprite(670,320,1,1);
  ba.addImage(bai);
  ba.visible = true;
  ba.scale = 1;

  taskbar = createSprite(410,600,1,1);
  taskbar.addImage(taskbari);
  taskbar.visible = false;
  

  t2 = createSprite(780,600,1,1);
  t2.addImage(t2i);
  t2.visible = false;
  t2.scale = 0.97;

 
  t3 = createSprite(1060,600,1,1);
  t3.addImage(t3i);
  t3.visible = false;
  t3.scale = 0.97;


  t4 = createSprite(918,600,1,1);
  t4.addImage(t4i);
  t4.visible = false;

  a1 = createSprite(670,320,1,1);
  a1.addImage(a1i);
  a1.visible = false;

  b1 = createSprite(647,366,75,21)
  b1.visible = false;

  b2 = createSprite(730,366,75,21)
  b2.visible = false;
  
  b3 = createSprite(813,366,75,21)
  b3.visible = false;

  tor = createSprite(212,76,1,1);
  tor.addImage(tori);
  tor.scale = 0.7;
  tor.visible = true;
   
  da = createSprite(878,600,1,1);
  da.addImage(dai);
  da.visible = true;
  da.scale = 0.94

  q = createSprite(600,300,1,1)
  q.addImage(q1);
  q.visible = false;
  q.scale = 0.7;
  
  c1 = createSprite(737,288,70,22);
  c1.visible = false;

  c2 = createSprite(432,253.5,15.5,15.5);
  c2.visible = false;

  c3 = createSprite(865,75,25,22);
  c3.visible = false;

  c4 = createSprite(900,75,25,22);
  c4.visible = false;
  
  c5 = createSprite(935,75,25,22);
  c5.visible = false;

  c6 = createSprite(630,288,130,22);
  c6.visible = false;
}


function draw() {
 

p=p+1;
  background(0);
  drawSprites();
     fill("red");
  text(mouseX+"x"  +mouseY+"y",mouseX-10,mouseY)
    
     taskbar.visible = true;
     t2.visible = true;
     t4.visible = true;
     t3.visible = true;
     
     if(l === 0){

      if(mousePressedOver(taskbar)||mousePressedOver(t2)||mousePressedOver(t3)||mousePressedOver(t4)){
        alert("Access Denied");
       }
    
       if(p===20){
        a1.visible = true;
     
       }
    fill("white");
    textSize(12);
    strokeWeight(0);
    text("Start",200,135);
    text("Tor",205,150);
    text("Browser",193,165);
       
    if(mousePressedOver(b1)){
      window.open('', '_self').close();
         window.top.close();
         window.close();
    
        }
        if(mousePressedOver(b2)){
          location.reload(); 
          l = 1;
     }
     
if(mousePressedOver(b3)){
  a1.visible = true; 
  l = 1;
}
   }

     


    
     if(l === 1){

      if(mousePressedOver(taskbar)||mousePressedOver(t2)||mousePressedOver(t3)||mousePressedOver(t4)){
        alert("Access Denied");
       }
     
      a1.addImage(a2i);
      a1.x = 600;
      a1.y = 200;
     
      b1.x = 658;
      b1.y = 250;
      b2.x = 745;
      b2.y = 250;
  
      if(mousePressedOver(b1)){
      a1.visible = false;
      da.visible = false;
      l = 2;
      
      }
      if(mousePressedOver(b2)){
        a1.visible = false;
        da.visible = false;
      l = 2;
      
      }
    fill("white");
    textSize(12);
    strokeWeight(0);
    text("Start",200,135);
    text("Tor",205,150);
    text("Browser",193,165);
     }
     if(l === 2){
      if(mousePressedOver(taskbar)||mousePressedOver(t2)||mousePressedOver(t3)||mousePressedOver(t4)){
        alert("Access Denied");
       }
     
      fill("white");
      textSize(12);
      strokeWeight(0);
      text("Start",200,135);
      text("Tor",205,150);
      text("Browser",193,165);
     l = 3
     }
     
    if(l ===3){
      if(mousePressedOver(taskbar)||mousePressedOver(t2)||mousePressedOver(t3)||mousePressedOver(t4)){
        alert("Access Denied");
       }
     
      fill("white");
      textSize(12);
      strokeWeight(0);
      text("Start",200,135);
      text("Tor",205,150);
      text("Browser",193,165);
      if(mousePressedOver(tor)){
        l = 4;
        p = 0;
        q.addImage(q1);
        fill("white");
      textSize(12);
      strokeWeight(0);
      text("Start",200,135);
      text("Tor",205,150);
      text("Browser",193,165);
      }

    }
    if(l === 4){
      q.visible = true;
      da.visible = true;
      da.addImage(w);
      fill("white");
      textSize(12);
      strokeWeight(0);
      text("Start",200,135);
      text("Tor",205,150);
      text("Browser",193,165);
     if(mousePressedOver(c1)){
       l = 5;
     }
     if(mousePressedOver(c2)){
      q.addImage(q2);
    }
    if(mousePressedOver(c3)){
      q.visible = false;
      l = 3;
    }
    if(mousePressedOver(c4)){
 
     alert("Disabled Because of High Security");
      
    }
    if(mousePressedOver(c5)){
      l = 3;
      da.visible = false;
      q.visible = false;
    }
    if(mousePressedOver(c6)){
    alert("Out Of Rules")
    }

    }
    if(l === 5){
      o = o+1;
      q.addImage(q3)
      fill("white");
      textSize(12);
      strokeWeight(0);
      text("Start",200,135);
      text("Tor",205,150);
      text("Browser",193,165);
   if(o === 30){
     l = 6;
     alert("Done ,Mission Ready");
   }

    }
    if(l === 6){
      window.location.replace("https://www.google.com");
    
      
    }
  

  }
function mousePressed(){
  if(l === 0){
    if(mousePressedOver(taskbar)||mousePressedOver(t2)||mousePressedOver(t3)||mousePressedOver(t4)){
      alert("Access Denied");
     }
  }
}