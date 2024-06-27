let noseX = 0;
let noseY = 0;
let clown_nose;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent('canvasContainer');
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  clear();
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}

function modelLoaded() {
  console.log('Filtro incializado');
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x - 15;
    noseY = results[0].pose.nose.y - 15;
  }
}

function take_snapshot() {
  save('minhafoto.png');
}





