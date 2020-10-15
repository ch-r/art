let t;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(360);
} 

function draw() { 
  t = frameCount;
  colorMode(HSL, 360);
  translate(width/2, height/2);
   
  noStroke();
  strokeWeight(1);
  background(360);
  
  
  a = 100;
  b = 150;
  c = 300;
  d = 360;
  
  //   make a set for  'grain' number of rings
  let grain = 50;
  for (x = 0; x<grain; x++){
    hue   = map(x, 0, grain, 360,0);
    fill(hue, 360, 150, 60);
    // ellipse( a, b, c, d);
    //replace ellipse with equation of x,y
    bezier( 0, 0, 60*sin(t/500), 700 *sin(t/200), 800*cos(t/200), 60 *cos(t/50), 0, 0);
    rotate(2*PI/grain);
  }
}



