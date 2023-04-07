let w;
let h;

function preload() {
  img = loadImage('globe.png');
}

function setup() {
  w = img.width;
  h = img.height;
  let canvas = createCanvas(w, h);
  canvas.parent("canvas");
}

function draw() {
  image(img, 0, 0);

  stroke('blue');
  strokeWeight(20);
  
  //Chicago
  point(w/3.42, h/3.53);
  //DC
  point(w/3.23, h/3.17);
  
  
  stroke('red');
  //bahgdad
  point(w/1.68, h/2.99);
  //kabul
  point(w/1.46, h/3.07);
  //guantanamo
  point(w/3.27, h/2.56);
  //veracruz
  point(w/3.86, h/2.58);
  //al tanf
  point(w/1.66, h/3.06);
  //nicaragua
  point(w/3.33, h/2.21);
  //point au prince
  point(w/2.76, h/2.5);
  //haiti, general
  point(w/2.71, h/2.48);
  //DR
  point(w/2.73, h/2.62);
  //Santo DOmingo, DR
  point(w/2.78, h/2.55);
  //grenada
  point(w/2.89, h/2.18);
  //panama
  point(w/3.46, h/2.09);
  //seoul
  point(w/1.26, h/3.40);
}