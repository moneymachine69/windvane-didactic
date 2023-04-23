let w;
let h;

const placesP = ["guantanamo", "veracruz", "point au prince", "nicaragua", "dominican republic", "seoul", "santo domingo", "grenada", "haiti", "panama",
 "kabul", "bahgdad", "al tanf"]; 
const placesW = [3.27, 1.68, 2.76, 3.33, 2.73, 1.26, 2.78, 2.89, 2.71, 3.46, 3.86, 1.46, 1.66];
const placesH = [2.56, 2.99, 2.5, 2.21, 2.62, 3.4, 2.55, 2.18, 2.48, 2.09, 2.58, 3.07, 3.06];

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