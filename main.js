status1 = "";
objects = [];
function setup(){
    canvas = createCanvas(480, 380);
canvas.position(500, 200);
video = createCapture(VIDEO);
video.hide();
}
function start(){
    x = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById('status').innerHTML = "Status: Detecting objects";
}
function modelloaded(){
    console.log('The "CoCo" singleshot multibox detection model has loaded!');
    status1 = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
}