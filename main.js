status="";
input="";


function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}

function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects"
    input=document.getElementById(input).value;
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;

}

function draw() {
    image(video,0,0,480,380);

}