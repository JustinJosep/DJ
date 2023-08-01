scoreLeftWrist = 0;
scoreRightWrist = 0;
songStatus = "";
song ="";
song1 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function  draw(){
    image(video, 0, 0, 600, 500);
    if(scoreLeftWrist > 0.2)
{
    stroke("#FF0000");
    fill("#FF0000");
    circle(leftWristX,leftWristY,20)
song1.stop()
songStatus=song.isPlaying()
if(songStatus == "false")
{
    song.play()
}
}
if(scorerighttWrist > 0.2)
{
    stroke("#FF0000")
    fill("#FF0000")
    circle(rightWristX,rightWristY)
    song.stop()
    songStatus=song1.isPlaying()
    if(songStatus == "flase")
    {
        song.play()
    }
}
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        scoreRightWrist= results[0].pose.keypoints[8].score;
        console.log("scoreRightWrist = " + scoreRightWrist);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}


