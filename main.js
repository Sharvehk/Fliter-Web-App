nose_x = 0;
nose_y = 0;
function preload(){
   mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png'); 
}

function setup(){
  canvas = createCanvas(500,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video,modelloaded);
  posenet.on('pose',getposes);
}

function snap(){
    save('Your Image.png');
}

function modelloaded() {
  console.log("model ready");
}

function getposes(results) {
   if(results){
     console.log(results);
     nose_x = results[0].pose.nose.x-125;
     nose_y = results[0].pose.nose.y-60;
   }
}

function draw(){
  image(video,0,0,500,400);
  image( mustach,nose_x,nose_y,110,60);
 }
