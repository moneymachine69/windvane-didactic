let w;
let h;

const placesP = ["bahgdad", "kabul", "guantanamo", "veracruz", "al tanf", "nicaragua", "point au prince", "haiti", "dominican republic", "santo domingo", "grenada", "panama", "seoul"]; 
const placesW = [1.68, 1.46, 3.27, 3.86, 1.66, 3.33, 2.76, 2.71, 2.73, 2.78, 2.89, 3.46, 1.26];
const placesH = [2.99, 3.07, 2.56, 2.58, 3.06, 2.21, 2.5, 2.48,2.62, 2.55, 2.18, 2.09, 3.4];

let placesNum = 0;

function preload() {
  img = loadImage('globe.png');
  
  frameRate(0.5);
}

function setup() {
  w = img.width;
  h = img.height;
  let canvas = createCanvas(w, h);
  canvas.parent("sketchblock");

}

function draw() {
  image(img, 0, 0);

  stroke('blue');
  strokeWeight(7);
  
  //Chicago
  point(w/3.42, h/3.53);
  //DC
  point(w/3.23, h/3.17);
  
  stroke('red');
  point(w/placesW[placesNum], h/placesH[placesNum]);
  print(placesP[placesNum]);
  if (placesNum < places.length - 1){
    placesNum++;
  }else{
    placesNum = 0;
  }
  
}