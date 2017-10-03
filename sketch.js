function setup() {
  createCanvas(800,600);
  background(240,240,240);
  noStroke();
}



function draw() {
  /*
  //ruota davanti
    //ombra
    fill(200,200,200);
    translate(395,550);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-395,-550)
    noFill();
    //davanti
    fill(100,100,100);
    translate(400,560);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-400,-560)
    noFill();
  //ruota dx
    //ombra
    fill(200,200,200);
    translate(500,460);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-500,-460)
    noFill();
    //davanti
    fill(100,100,100);
    translate(505,470);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-505,-470)
    noFill();
  //ruota sx
    //ombra
    fill(200,200,200);
    translate(395,550);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-395,-550)
    noFill();
    //davanti
    fill(100,100,100);
    translate(400,560);
    shearY(-PI/4.0);
    ellipse(0,0,30,30);
    shearY(PI/4.0);
    translate(-400,-560)
    noFill();
  
  //ruota unica
    fill(200,200,200);
    ellipse(400,500,150,150);
    noFill();
  */
  //ombre drammatiche
    fill(150,150,150);
    quad(400,390,800,390,800,590,400,590);
    quad(330,520,400,520,500,490,400,390);
    noFill();
    
  //cingoli
    //cingolo davanti
    fill(50,50,50);
    quad(400,560,500,460,500,490,400,590);
    noFill();
    fill(200,200,200);
    quad(370,530,400,560,400,590,370,560);
    noFill();
    fill(100,100,100);
    quad(370,530,470,430,500,460,400,560);
    noFill();    
    //cingolo dietro
    fill(50,50,50);
    quad(330,490,430,390,430,420,330,520);
    noFill();
    fill(200,200,200);
    quad(300,460,330,490,330,520,300,490);
    noFill();
    fill(100,100,100);
    quad(300,460,400,360,430,390,330,490);
    noFill();
  
  //base top
    fill(50,50,50);
    quad(300,300,400,200,500,300,400,400);
    noFill();
  //lati
    fill(80,80,80);
    quad(300,300,400,400,400,550,300,450);//lato sx
    fill(255,255,255);
    
    fill(20,20,20);
    quad(400,400,500,300,500,450,400,550);//lato dx
    fill(255,255,255);
  
  //collo
    fill(190,190,190);
    rect(390,120,10,180,5);
    rect(420,120,10,210,5);
    rect(450,120,10,180,5);
    fill(255,255,255);
    //ombre collo
      fill(120,120,120);
      rect(395,120,5,180,5);
      rect(425,120,5,210,5);
      rect(455,120,5,180,5);
      fill(255,255,255);
      //ombre lunghe
  //antenne
    fill(190,190,190);
    rect(300,117,250,10,5);
    rect(420,25,10,50,5);
    fill(255,255,255);
    //ombre antenne
    fill(120,120,120);
    rect(300,122,250,5,5);
    rect(425,25,5,50,5);
    fill(255,255,255);
  //testa
    fill(50,50,50);
    ellipse(425,120,150,150);
    fill(255,255,255);
    //riflesso
    ellipse(400,70,20,20);
  //occhio
    ellipse(425,120,50,50);
    fill(0,0,0);
    rect(415,95,20,50,5);
    fill(255,255,255);
  //rossi  
    fill(255,0,30);
    ellipse(380,120,5,5);
    ellipse(425,75,5,5);
    ellipse(470,120,5,5);
    fill(255,255,255);
  //dettagliOcchio
    stroke(230,230,230);
    strokeWeight(5);
    noFill();
    ellipse(425,120,50,50);
    noStroke();
    stroke(0,0,0);
    strokeWeight(5);
    noFill();
    ellipse(425,120,45,45);
    noStroke();
  //luce_blu
    fill(0,100,255);
    quad(300,320,400,420,400,440,300,340);
    quad(400,420,500,320,500,340,400,440);
    noFill();
  //cerchio
    stroke(200,200,200);
    strokeWeight(1);
    ellipse(400,300,590,590);
    noFill();
    noStroke();
    
}