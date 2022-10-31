nose_X = 0
nose_Y = 0
leftWristX = 0
rightWristX = 0
difference = 0
function setUp(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log('poseNet is intialised');
}
function draw(){
    background('#9f9ba4');
    document.getElementById("square_side").innerHTML = "Width and height of the square is = "+difference+"px";
    fill('#ff0066');
    stroke('#ff0066');
    square(nose_X,nose_Y,difference);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nose_X = results[0].pose.nose.x;
    nose_Y = results[0].pose.nose.y;
    console.log("nose X = "+nose_X +"nose Y = "+nose_Y);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"Difference = "+difference);
}
}

